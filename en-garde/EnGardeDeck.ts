import * as card_board from "../card-board/index"
import {EnCarde} from './EGCard'


export class EnGardeDeck extends  card_board.Deck {

    constructor (drawDeck: boolean = false){
        super();
        if (drawDeck){

            let curid: number = 1;

            for (let i=1; i <= 5; i++) {
                for (let j=1; j <= 5; j++) {

                    let titleText: string;
                    switch(i) { 
                        case 1: { 
                        titleText = "One #" + j; 
                        break; 
                        } 
                        case 2: { 
                            titleText = "Two #" + j; 
                        break; 
                        } 
                        case 3: { 
                            titleText = "Three #" + j;
                            break; 
                        }
                        case 4: { 
                            titleText = "Four #" + j;
                            break; 
                        }
                        case 5: { 
                            titleText = "Five #" + j;
                            break; 
                        } 
                    } 
                    this.deckArray.push(new EnCarde(curid++, i, titleText))
                }
            }
            
        }
        
    }


}
