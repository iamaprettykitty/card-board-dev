import { Game } from "./Game";
import {CBConnInfo} from './abstCBConnInfo'

export class Player{
    name: string;
    curGame: Game;
    connInfo: CBConnInfo;
    
    public getName(): string{
        return this.name;
    }
}

