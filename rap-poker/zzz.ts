import * as rap_poker from './index'

    class sockRapPoker{
        public static main(): void {
            
            let game: rap_poker.RapPoker;
            let rpio: rap_poker.SockRapPokerIO = new rap_poker.SockRapPokerIO();
            game = new rap_poker.RapPoker(rpio);
            rpio.readyGame(game);
            
            game.startGame();

        }
    }

    sockRapPoker.main();

