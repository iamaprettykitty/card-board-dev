import * as card_board from '../card-board/index';
import {EnGarde} from './EnGarde'

export enum ActionType {

    ADV,//Advance
    RET,//Retreat
    ATT,//Attack, (THRUST!)
    AAA//Advance and Attack

}

export enum ReactionType {

    PRY,//Parry, (PARRY)!
    RET//Retreat

}


export interface EGAction extends card_board.Action{

    type: ActionType;
    cards: card_board.Card[];

}

export interface EGReaction extends card_board.Reaction {

    type: ReactionType;
    cards: card_board.Card[];

}

export class EnGardeIO extends card_board.CardBoardIO {

    curGame: card_board.Game;

    public constructor(){
        super();
    }

    public promptAction (p: card_board.Player) {} //abstract only
    public promptReaction (p: card_board.Player) {} //abstract only

    public buildAndSendAction (at: ActionType, c: card_board.Card[]) {
        let curAction = {type: at, cards:c};
        this.curGame.processAction(curAction);

    }

    public readyPlayers(players: card_board.CBConnInfo[]){}

    public processResult(b: EnGarde, a: card_board.Action, r?: EGReaction){

        //TODO: Code here for IO-independent round result handling

    }

    public readyGame (g: card_board.Game) {this.curGame=g}
    public readyRound() {} //abstract only
    public readyTurn() {} //abstract only

    

    

}
