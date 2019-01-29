namespace card_board {

    export enum DrawResult {

        SUC, //Successfully drew
        EMY, //Successfully drew, but deck is now empty
        ERR// Not able to draw all cards, due to empty deck

    }

    // export interface Card {

    //     id: number;
    //     title: string;
    //     value: string;

    // }


    export class Deck {

        deckArray: Card[];

        constructor (){

            this.deckArray = [];
            
        }

        public schawfulschawfulschawful(){

            this.shuffleDeck();
            this.shuffleDeck();
            this.shuffleDeck();

        }

        private shuffleDeck(){
            // if it's 1 or 0 items, just return
            if (this.deckArray.length <= 1) return null;
    
            // For each index in array
            for (let i = 0; i < this.deckArray.length; i++) {
    
                const randomChoiceIndex = this.randomInt(0, this.deckArray.length - 1);
    
                // place our random choice in the spot by swapping
                [this.deckArray[i], this.deckArray[randomChoiceIndex]] = [this.deckArray[randomChoiceIndex], this.deckArray[i]];
            }
    
            
        }

        public draw(hand: Hand, qty: number = 1):DrawResult{

            for (let i = 0; i < qty; i++){
                if (!hand.isFull() && this.deckArray.length > 0 ) {
                    hand.addCard(this.deckArray.pop());
                    if (this.deckArray.length > 0) {
                        return DrawResult.SUC;
                    }
                    else return DrawResult.EMY;
                }
                else return DrawResult.ERR
            }
        }

        public randomInt(low: number, high:number): number {
            return Math.floor(Math.random() * (high - low) + low)
        }

        public toString(): string {
            let returnString: string = "";
            for (let i=0; i <this.deckArray.length; i++) {
               
                returnString = returnString + "[" + this.deckArray[i].title + "], " + '\n'
                
            }
            return returnString;
        }

        public deal(numCards: number, hands: Hand[]){

            for (let i = 0; i<numCards;i++){

                for (let j = 0; j<hands.length;j++){

                    hands[j].addCard(this.deckArray.pop());

                }
                
            }
        }

        public addCards(cards: Card[]){
            this.deckArray = this.deckArray.concat(cards);
        }
    }

}