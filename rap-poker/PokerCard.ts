import {Card} from './Card'

export enum Suit{
    H,
    S,
    D,
    C

} 


export class PokerCard extends Card{

    rank: number;
    suit: Suit;

    constructor (rank: number, suit: number){
        super()
        this.rank = rank
        this.suit = suit
    }

    public ToString(): string{
        return this.RankString() + Suit[this.suit]
    }

    public RankString():string{
        switch(this.rank) { 
            case 1: { 
               return 'A' 
               break; 
            }
            case 2: { 
                return '2' 
                break; 
             }
             case 3: { 
                return '3' 
                break; 
             }
             case 4: { 
                return '4' 
                break; 
             }
             case 5: { 
                return '5' 
                break; 
             }
             case 6: { 
                return '6' 
                break; 
             }
             case 7: { 
                return '7' 
                break; 
             }
             case 8: { 
                return '8' 
                break; 
             }
             case 9: { 
                return '9' 
                break; 
             }
             case 10: { 
                return '10' 
                break; 
             }
             case 11: { 
                return 'J' 
                break; 
             }
             case 12: { 
                return 'Q' 
                break; 
             }
             case 13: { 
                return 'K' 
                break; 
             }
        }
    }
}
    
