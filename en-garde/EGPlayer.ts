import {Hand} from '../card-board/Hand'
import * as card_board from "../card-board/index"
import { MAX_HAND_SIZE } from './EnGarde';

export class EGPlayer extends card_board.Player{

    hand: Hand;

    constructor(){
        super();
        this.hand = new card_board.Hand(MAX_HAND_SIZE);
    }

    public setName(n: string){
        this.name = n;
    }

    public getHand(): Hand{
        return this.hand;
    }
}
