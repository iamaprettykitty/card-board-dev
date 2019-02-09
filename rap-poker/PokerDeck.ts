<<<<<<< HEAD
import {Deck} from '../card-board/Deck'
import {PokerCard, Suit} from './PokerCard'



export class PokerDeck extends Deck{

    constructor(){
        super();
        for(let i:number = 0; i<4; i++){
            for(let j:number = 0; j<13; j++){
                this.defs.push(new PokerCard(j,i))
            }
        }
    }
=======
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
>>>>>>> dc7dc1567f1572a313ba2e7c0f9898a4257ca71c
}