import * as card_board from "../card-board/index"
import {EGPlayer} from './Player'
import {EnGardeDeck} from './EnGardeDeck'
import {EGBoard} from './EGBoard'
import {EnGardeIO, EGAction, EGReaction} from './abst-EnGardeIO'

export const MAX_HAND_SIZE = 5;

export class EnGarde extends card_board.Game{

    level: number;


    //curPlayer: number;
    dealer: number;

    //roundStartPlayer: number;

    //round: number;

    drawDeck: EnGardeDeck;
    discardDeck: EnGardeDeck;

    egio: EnGardeIO;

    constructor(level: number, egio: EnGardeIO){
        super(egio)
        this.egio = egio;
        this.reset(level);
        this.egio.readyPlayers(this.players);

    }

    reset(level: number){

        this.level = level;
        this.round = 1;
        this.board = new EGBoard(this.egio);
        this.drawDeck = new EnGardeDeck(true);
        this.discardDeck = new EnGardeDeck();
        this.curPlayer = 0;
        this.roundStartPlayer = 0;
        this.dealer = 1;

    }

    startGame() {

        this.egio.readyGame(this);
        this.startRound(this.players[0]as EGPlayer);

    }

    startRound(startPlayer: EGPlayer) {

        this.drawDeck.schawfulschawfulschawful();
        this.drawDeck.deal(MAX_HAND_SIZE,[(this.players[this.roundStartPlayer] as EGPlayer).getHand(), (this.players[this.dealer]as EGPlayer).getHand()]);
        this.egio.readyRound();
        this.startTurn(startPlayer);
    }

    getHands(): card_board.Hand[]{

        return [
            (this.players[this.roundStartPlayer] as EGPlayer).getHand(), 
            (this.players[this.dealer]as EGPlayer).getHand()
        ]

    }


    startTurn(player: EGPlayer){

        this.egio.readyTurn();
        this.egio.promptAction(player);

    }


    public processAction(action: EGAction){

        

    }

    
    processReaction(reaction: EGReaction){



    }


    processTurnResult(){



    }


    nextTurn(){

        if (this.curPlayer = 0){

            this.curPlayer = 1;

        }
        else {

            this.curPlayer = 0;

        }
            
        this.startTurn(this.players[this.curPlayer] as EGPlayer);

    }

    
    nextRound() {

        this.drawDeck.collectCards([]);
        this.curPlayer++;
        if( this.curPlayer > 1 ) this.curPlayer = 0;

    }


}
