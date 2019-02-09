import {Game, CBServer, Player} from '../card-board/index'
import { PokerCard,PokerHand } from "./index";


export class RPPlayer extends Player{
    hand: PokerHand

    constructor(){
        super();
        this.hand = new PokerHand()
    }
    public giveHand(h: PokerHand): void{
        this.hand = h;
    }
    public collectCards(): number[]{
        return this.hand.dump();
    }

    public numCards(): number {
        return this.hand.numCards();
    }
    public giveCard(card: PokerCard): void{

    }

    private discardCard(cardID: number): void{
        this.hand.discardCard(cardID)
    }

}