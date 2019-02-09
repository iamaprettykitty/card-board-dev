import {Hand} from '../card-board/Hand'
import * as card_board from "../card-board/index"

export class EGPlayer extends card_board.Player{

    public hand: Hand;

    constructor(){
        super();
        this.hand = new Hand();
    }

    public getName(): string{
        return this.name;
    }

    public setName(n: string){
        this.name = n;
    }

    public getHand(): Hand{
        return this.hand;
    }
}
