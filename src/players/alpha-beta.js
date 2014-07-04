var Mauler = Mauler || {};
Mauler.Players = Mauler.Players || {};

Mauler.Players.AlphaBeta = function(options) {
    options = options || {};
    this.maxDepth = options.maxDepth || Number.MAX_VALUE;
};

Mauler.Players.AlphaBeta.prototype = {

    constructor: Mauler.Players.AlphaBeta,

    ab: function(game, curDepth, alpha, beta) {
        if (game.isOver() || curDepth === this.maxDepth) {
            return { move: -1, score: utilFunc(game, game.curPlayer()) }; // TODO remove move? or change to null?
        }
        var bestMove = -1,
            bestScore = -Number.MAX_VALUE;
        for (var move = 0; move < game.numMoves(); move++) {
            var newGame = game.copy();
            newGame.move(move);
            var curMoveScore = this.ab(newGame, curDepth + 1, -beta, -Math.max(alpha, bestScore)),
                curScore = -curMoveScore.score;
            if (curScore > bestScore) {
                bestMove = move;
                bestScore = curScore;
                if (bestScore >= beta) {
                    return { move: bestMove, score: bestScore };
                }
            }
        }
        return { move: bestMove, score: bestScore };
    },

    move: function(game) {
        return this.ab(game.copy(), 0, -Number.MAX_VALUE, Number.MAX_VALUE).move;
    }

};