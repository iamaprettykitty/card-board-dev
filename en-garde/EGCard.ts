import * as card_board from '../card-board/index';

export class EGCard extends card_board.Card{

    
    strength: number;
    constructor(str:number, titleText: string){
        super();
        this.title = titleText; 
        this.strength = str; 
    }
}