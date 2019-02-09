import {Game, Hand, CBServer, Prompt, Response} from '../card-board/index'
//import {Hand} from 
import {RPPlayer, PokerHand, HandRank, PokerDeck} from './index'
//import {  } from './PokerDeck';
//import { CBServer } from './abstCBServer';
//import { Prompt } from './abstIOMessages';

class RPDrawPrompt extends Prompt{}

class RPDrawChoice extends Response{}

class RPDiscardPrompt extends Prompt{}

class RPDiscardChoice extends Prompt{}

export class RapPoker extends Game{

    players: RPPlayer[];

    drawDeck: PokerDeck

    constructor(cps: CBServer){

        super(cps);
    }

    public startGame(){
        this.curPlayer = 0;

        this.startRound(this.players[this.curPlayer]);


    }

    public addPlayer(newPlayer: RPPlayer){
        this.players.push(newPlayer);
    }

    startRound(startPlayer: RPPlayer) {

        
    }


    private startTurn(player: RPPlayer){

        this.server.promptPlayer(player, new RPDrawPrompt(), this.processDrawChoice)
        

    }

    public processDrawChoice(drawChoice: RPDrawChoice){


    }

    public processDiscardChoice(discardChoice: RPDiscardChoice){

    }

    private processRap(){

    }

    private resolveRound(){

    }

    private resolveWinner(){

    }

    private breakTie(hands: Hand[]){

    }

    private determinePokerHand(hand: PokerHand): HandRank{
        if(hand.isStraightFlush()){
            return HandRank.StraightFlush
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        } 
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
        else if(hand.isFourOfAKind()){
            return HandRank.FourOfAKind
        }
    }

    






    nextPlayerTurn(){
        if(this.curPlayer++ >= this.players.length)
            this.curPlayer = 0
            
        this.startTurn(this.players[this.curPlayer]);

    }

    
    nextRound() {

        this.curPlayer++;
        if( this.curPlayer > 1 ) this.curPlayer = 0;

    }


    public getCurrentPlayer(): RPPlayer {
        
        return this.players[this.curPlayer];
    }


}