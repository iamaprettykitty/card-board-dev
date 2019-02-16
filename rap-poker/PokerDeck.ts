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
}