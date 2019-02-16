import {Player, Game} from './index'

export enum GameType{
    RP
}

export abstract class CBServer{

    games: Game[];

    public constructor()
    public start():void
    public createNewGame(gameType: GameType, startPlayer: Player):void
    public addNewPlayer(newPlayer: Player, game: Game): void
    public notifyPlayers(players:Player[], groupNotification: any):void
    public notifyPlayer(p: Player, notification: any):void
    public promptPlayer(player:Player, prompt: any, promptHandler: (response: any)=>boolean):void
}