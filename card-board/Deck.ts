//namespace card_board {
import {Card} from './Card'

export class Deck {

    defs: Card[];

    constructor (){

        this.defs = [];
        
    }

    public details(id:number):Card{

        return this.defs[id];

    }

    

    public toString(): string {
        let returnString: string = "";
        for (let i=0; i <this.defs.length; i++) {
            
            returnString = returnString + "[" + this.defs[i].title + "], " + '\n'
            
        }
        return returnString;
    }

    

    

    public addDefs(ds: Card){

        this.defs = this.defs.concat(ds);

    }

}
