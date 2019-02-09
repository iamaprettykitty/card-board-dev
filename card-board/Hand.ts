import {Card} from './Card';



export class Hand {
    
<<<<<<< HEAD
    private cards: number[];
    maxSize: number = 99;

    constructor(
        c: number[] = []) {
        
        this.cards = c;
    }

    setMaxHandSize(m: number){
        this.maxSize = m;
    }

=======
    cards: number[];
    maxSize: number;

    constructor(m:number, c: number[] = []) {
        this.maxSize = m;
        this.cards = c;
    }

>>>>>>> dc7dc1567f1572a313ba2e7c0f9898a4257ca71c
    addCard(card: number){
        this.cards.push(card);
    }

    public numCards(): number{

        return this.cards.length;
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

    public discardCard(cardID): boolean {
        for(let i:number = 0; i < this.cards.length; i++){
            if (this.cards[i] = cardID){
                this.cards.splice(i,1)
                return true;
            }
        }
        return false;
    }


}

