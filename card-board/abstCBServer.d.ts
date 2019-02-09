import {Player} from './Player'
import {Game} from './Game'
import {CBMessage, Notification, Prompt} from './abstIOMessages'

export enum GameType{

}



export abstract class CBServer{
    games: Game[];

    public constructor()
    public start():void
    public createNewGame(gameType: GameType, startPlayer: Player):void
    public addNewPlayer(newPlayer: Player, game: Game): void
    public notifyPlayers(players:Player[], notification: any):void
    public notifyPlayer(player:Player, notification: any):void
    public promptPlayer(player:Player, prompt: any, promptHandler: (message: any)=>any):void
    public promptPlayers(players:Player, prompt: any, promptHandler: (message: any)=>any):void


}