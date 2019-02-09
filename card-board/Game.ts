import {Player} from './Player';
//import {Board} from './board';
import {CBServer} from './abstCBServer'
// import {CardBoardIO, Action, Reaction} from './abstCardBoardIO'

export class Game {

    id: number;

    players: Player[];

    curPlayer: number;

    roundStartPlayer: number;

    round: number;

    //board: Board;
    

    server: CBServer;

    constructor(cbs: CBServer){

        this.server = cbs;
        //this.server.readyPlayers(this.players);

    }

    reset(level: number){

        this.round = 1;
        //this.board = new Board(this.gameio);
        this.curPlayer = 0;
        this.roundStartPlayer = 0;

    }

    public startGame() {

        //this.gameio.readyGame(this);
        this.startRound(this.players[0]);

    }

    startRound(startPlayer: Player) {

        
    }


    startTurn(player: Player){

        

    }


    public processAction(action: Action){

        

    }

    
    public processReaction(reaction: Reaction){



    }


    public processTurnResult(){



    }


    nextTurn(){
        if(this.curPlayer++ >= this.players.length)
            this.curPlayer = 0
            
        this.startTurn(this.players[this.curPlayer]);

    }

    
    nextRound() {

        this.curPlayer++;
        if( this.curPlayer > 1 ) this.curPlayer = 0;

    }


    public getCurrentPlayer(): Player {
        
        return this.players[this.curPlayer];
    }
}