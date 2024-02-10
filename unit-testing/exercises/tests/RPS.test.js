const RPS = require('../RPS.js')

describe("whoWon", function() {
    test("return 'TIE!' if Player 1 and Player 2 are the same", function() {
        let output = RPS.whoWon('rock', 'rock');
        expect(output).toBe("TIE!")
    });

    test("return 'Player 2 wins' if P1 = rock & P2 = paper", function() {
        let output = RPS.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!")
    });

    test("returns 'Player 2 wins' if P1 = paper & P2 = scissors", function() {
        let output = RPS.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!")
    });

    test("returns 'Player 2 wins' if P1 = scissors & P2 = rock", function() {
        let output = RPS.whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!")
    });

    test("returns 'Player 1 wins' if none of the above apply", function() {
        let output = RPS.whoWon('rock','scissors');
        expect(output).toBe("Player 1 wins!")
    });
   
});