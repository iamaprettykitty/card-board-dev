import {Card} from './Card';



export class Hand {
    
    cards: Card[];
    maxSize: number;

    constructor(m:number, c: Card[] = []) {
        this.maxSize = m;
        this.cards = c;
    }

    addCard(card: Card){
        this.cards.push(card);
    }

    isFull(): boolean{
        if (this.cards.length >= this.maxSize) return true;
        else return false;
    }

    public toString(showtitle: boolean = false): string {
        let returnString: string = "";
        for (let i=0; i <this.cards.length; i++) {
            if (showtitle)
                returnString = returnString + "[" + this.cards[i].title + "], "
            else
                returnString = returnString + "[" + this.cards[i].toString() + "], "
        }
        return returnString;
    }

    public dump(): Card[]{
        let returnArray = [];
        while (this.cards.length > 0){
            returnArray.push(this.cards.pop());
        }
        return returnArray;
    }


}

