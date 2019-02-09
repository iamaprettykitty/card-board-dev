import {Deck} from '../card-board/Deck'

export enum Suit{
    H,
    S,
    D,
    C

} 

export class PokerDeck extends Deck{

    rank: number;
    suit: Suit;

    constructor(){
        super();
        for(let i:number; i<4; i++){
            Suit[i]
        }
    }
}