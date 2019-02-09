import {CBServer, GameType} from './abstCBServer'
import {Game} from './Game'
import {RapPoker} from './RapPoker'
//import {RPPlayer} from './RPPlayer'
import {Player} from '../card-board/Player'

export class RPTestServer extends CBServer{


    public constructor(){
        super();
    }

    public createNewGame(gameType: GameType, startPlayer: Player):void {
        super.createNewGame(GameType.RP, startPlayer)
    }

    public addNewPlayer(newPlayer: Player, game: Game): void {
        this.games[0].addNewPlayer(newPlayer)
    }

    public notifyPlayers(players: Player[], notification: any):void {

    }

    public notifyPlayer(player: Player, notification: any):void {

    }

    public promptPlayer(player: Player, prompt: any, promptHandler: (message: any)=>any):void {

    }

    public promptPlayers(players: Player, prompt: any, promptHandler: (message: any)=>any):void {

    }

    start(){

        super.start()
        this.games.push(new RapPoker(this));
        this.games[0].startGame();
    }
}

this.start();


