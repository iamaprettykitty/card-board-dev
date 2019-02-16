import {Hand} from '../card-board/index'
import {PokerCard, PokerDeck} from './index'
export enum HandRank{
    HighCard,
    Pair,
    TwoPair,
    ThreeOfAKind,
    Straight,
    Flush,
    FullHouse,
    FourOfAKind,
    StraightFlush
}
export class PokerHand extends Hand{
    deck: PokerDeck;
    constructor(cardDefs){
        super()
    }

    public isStraightFlush(): boolean{
        if (this.isStraight() && this.isFlush()){
            return true;
        }
        else 
        return false;
    }
    
    public isFourOfAKind(): boolean{
        let lastRank: number = 0;
        let differentRankCount: number = 0;
        let largestRankCount: number = 0;
        let curCard: PokerCard;
        var sorrtedCards:Array<number> = this.cards.sort((n1,n2)=> n1 - n2);
        for (let i:number = 0; i<this.cards.length; i++){
            curCard = (this.deck.details(this.cards[i])) as PokerCard
            if (lastRank == 0){
                lastRank = curCard.rank
            }
            if (lastRank == curCard.rank){

            }
        }
        return false;
    }

    public static tieBreakStraightFlush(hands: Hand[]): number{
        return 0;
    }

    

    public static tieBreakFourOfAKind(hands: Hand[]): number{
        return 0;
    }

    public isFullHouse(): boolean{
        return false;
    }

    public static tieBreakFullHouse(hands: Hand[]): number{
        return 0;
    }

    public isFlush(): boolean{
        return false;
    }

    public static tieBreakFlush(hands: Hand[]): number{
        return 0;
    }

    public isStraight(): boolean{
        return false;
    }

    public static tieBreakStraight(hands: Hand[]): number{
        return 0;
    }

    public isThreeOfAKind(): boolean{
        return false;
    }

    public static tieBreakThreeOfAKind(hands: Hand[]): number{
        return 0;
    }

    public isTwoPair(): boolean{
        return false;
    }

    public static tieBreakTwoPair(hands: Hand[]): number{
        return 0;
    }

    public isPair(): boolean{
        return false;
    }

    public static tieBreakPair(hands: Hand[]): number{
        return 0;
    }

    public getHighCard(): boolean{
        return false;
    }

    public static tieBreakHighCard(hands: Hand[]): number{
        return 0;
    }

    private getRankCount(r: number){

    }
}