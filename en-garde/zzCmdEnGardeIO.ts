import * as card_board from '../card-board'

import {EnGardeIO, EGAction, EGReaction} from './abstEnGardeIO'
import {EGPlayer} from './EGPlayer'
export class CmdEnGardeIO extends EnGardeIO {


    constructor(){

        super();

    }

    public promptAction(p: EGPlayer) {
        this.getCmdLineInput("take a turn or sumpthin' i don't care");
    }



    public getCmdLineInput(prompt?: string): string {
        process.stdout.write(prompt);
        let retString: string;
        var stdin = process.openStdin();
        stdin.addListener("data", function(d) {retString = d.toString().trim();});
        return retString;
    }


    public roundStartIO() {

    }

    public promptReaction(p: EGPlayer) {}

    public processReaction(r: EGReaction) {}

    public updateBoard(){

        process.stdout.write(this.curGame.getCurrentPlayer().getName());

    }

    

    public showHand (h: card_board.Hand){}

    public showDeck(){}

    public refreshScreen(){}

    public clearScreen(){
        process.stdout.write('\033c');
    }

    public readyPlayers(players: EGPlayer[]){


        players[0].setName(this.getCmdLineInput('Player One Name:'));
        players[1].setName(this.getCmdLineInput('Player Two Name:'));

    }

    public promptTurnStart(player: EGPlayer){
        process.stdout.write('Ready ' + player.getName() + '\nPress Enter To Show Hand');
    }

    public promptGameEnd(winner: EGPlayer){
        process.stdout.write('Game Over');
    }

    public pressEnterPrompt(){
        process.stdout.write('Press Enter to Continue');
        this.getCmdLineInput();
    }
    
}


