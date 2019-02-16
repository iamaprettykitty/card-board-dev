import {Card} from './Card'
import {Hand} from './Hand'
import { Deck } from './Deck';

enum DrawResult {

    SUC, //Successfully drew
    EMY, //Successfully drew, but deck is now empty
    ERR// Not able to draw all cards, due to empty deck

}

export class Pile{
    
    cards: number[];
    deck: Deck;

    constructor(d: Deck){this.deck = d}
    public schawfulschawfulschawful(){

        this.shufflePile();
        this.shufflePile();
        this.shufflePile();

    }

    private shufflePile(){
        // if it's 1 or 0 items, just return
        if (this.cards.length <= 1) return null;

        // For each index in array
        for (let i = 0; i < this.cards.length; i++) {

            const randomChoiceIndex = this.randomInt(0, this.cards.length - 1);

            // place our random choice in the spot by swapping
            [this.cards[i], this.cards[randomChoiceIndex]] = [this.cards[randomChoiceIndex], this.cards[i]];
        }

        
    }

    public randomInt(low: number, high:number): number {
        return Math.floor(Math.random() * (high - low) + low);
    }

    public draw(hand: Hand, qty: number = 1):DrawResult{

        for (let i = 0; i < qty; i++){
            if (!hand.isFull() && this.cards.length > 0 ) {
                hand.addCard(this.cards.pop());
                if (this.cards.length > 0) {
                    return DrawResult.SUC;
                }
                else return DrawResult.EMY;
            }
            else return DrawResult.ERR
        }
    }

    public deal(numCards: number, hands: Hand[]){

        for (let i = 0; i<numCards;i++){

            for (let j = 0; j<hands.length;j++){

                hands[j].addCard(this.cards.pop());

            }
            
        }
    }
    public addCards(cards: number[]){

        this.cards = this.cards.concat(cards);
    }
    collectCards(hands: Hand[]){

        for(let i: number = 0; i< hands.length; i++){

            let dumpHand = hands[i].dump();
            this.addCards(dumpHand);

        }
    }
}