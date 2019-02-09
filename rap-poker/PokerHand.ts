import {Hand} from '../card-board/index'
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
    constructor(){
        super([])
    }

    public isStraightFlush(): boolean{
        if (this.isStraight() && this.isFlush()){
            return true;
        }
        else 
        return false;
    }

    public static tieBreakStraightFlush(hands: Hand[]): number{
        return 0;
    }

    public isFourOfAKind(): boolean{
        return false;
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
}