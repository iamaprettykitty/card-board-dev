<<<<<<< HEAD
import {Player} from './Player'
import {Game} from './Game'
import {Notification, Prompt, CBMessage} from './abstIOMessages'

export enum GameType{
    RP
}



export abstract class CBServer{
    games: Game[];

    public constructor()
    public start():void
    public createNewGame(gameType: GameType, startPlayer: Player):void
    public addNewPlayer(newPlayer: Player, game: Game): void
    public notifyPlayers(players:Player[], notification: any):void
    public notifyPlayer(player:Player, notification: any):void
    public promptPlayer(player:Player, prompt: any, promptHandler: (CBMessage: any)=>any):void
    public promptPlayers(players:Player, prompt: any, promptHandler: (CBMessage: any)=>any):void


=======
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


>>>>>>> dc7dc1567f1572a313ba2e7c0f9898a4257ca71c
}