const BOARD_LENGTH = 23;
import {EnGardeIO} from './abst-EnGardeIO'
import * as card_board from "../card-board/index"

export class EGBoard extends card_board.Board{
    
    p1ScorePos: number;
    p2ScorePos: number;

    p1Loc: number;
    p2Loc: number;

    constructor(egio: EnGardeIO){

        super(egio)
        this.p1ScorePos = 0;
        this.p2ScorePos = 0;

        this.p1Loc = 1;
        this.p2Loc = 2;
        
    }

    public playerDistance(): number{ return this.p1Loc - this.p2Loc; }



}
