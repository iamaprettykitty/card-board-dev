import * as engarde from './index'

    class cmdEnGarde{
        public static main(): void {
            
            let game: engarde.EnGarde;
            let egio: engarde.CmdEnGardeIO = new engarde.CmdEnGardeIO();
            let pOne: engarde.EGPlayer = new engarde.EGPlayer()
            egio.clearScreen();
            game= new engarde.EnGarde(0,egio);
            egio.readyGame(game);
            egio.clearScreen();
            egio.getCmdLineInput("Press Enter to Begin Game");
            game.startGame();

        }
    }

    cmdEnGarde.main();

