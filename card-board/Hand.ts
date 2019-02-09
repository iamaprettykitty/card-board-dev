import {Card} from './Card';



export class Hand {
    
    cards: number[];
    maxSize: number;

    constructor(m:number, c: number[] = []) {
        this.maxSize = m;
        this.cards = c;
    }

    addCard(card: number){
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
                returnString = returnString + "[" + this.cards[i] + "], "
            else
                returnString = returnString + "[" + this.cards[i].toString() + "], "
        }
        return returnString;
    }

    public dump(): number[]{
        let returnArray = [];
        while (this.cards.length > 0){
            returnArray.push(this.cards.pop());
        }
        return returnArray;
    }


}

