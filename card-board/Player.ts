import { Game } from "./Game";
//import {CBConnInfo} from './abstCBConnInfo'

export class Player{
    id: string;
    name: string;
    curGame: Game;
    
    public getName(): string{
        return this.name;
    }
}

