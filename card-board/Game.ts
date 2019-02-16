
import {CBServer, Player} from './index';


export class Game {

    id: number;

    players: Player[];

    curPlayer: number;

    roundStartPlayer: number;

    round: number;

    server: CBServer;

    constructor(cbs: CBServer){

        this.server = cbs;
    }


    public startGame() {}

    public addNewPlayer(newPlayer: Player):void {
        this.players.push(newPlayer);
    }


    // private startTurn(player: Player){

        

    // }


    // public processTurnResult(){



    // }


    // nextTurn(){
    //     if(this.curPlayer++ >= this.players.length)
    //         this.curPlayer = 0
            
    //     this.startTurn(this.players[this.curPlayer]);

    // }

    
    // nextRound() {

    //     this.curPlayer++;
    //     if( this.curPlayer > 1 ) this.curPlayer = 0;

    // }


    // public getCurrentPlayer(): Player {
        
    //     return this.players[this.curPlayer];
    // }

}