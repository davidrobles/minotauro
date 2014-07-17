// Model

var game = new Tic.Model();

// Controller

var controller = new mauler.Controller({
    game: game
});

// View

var canvasView = new Tic.CanvasView({
    model: game,
    width: 400,
    height: 400,
    canvas: document.getElementById("tic-canvas")
});

var infoView = new Tic.InfoView({
    model: game,
    el: document.getElementById("infoView")
});

var resetView = new mauler.ResetView({
    controller: controller,
    el: document.getElementById("reset-button")
});

// Observers

controller.registerObserver(canvasView);
controller.registerObserver(infoView);
controller.registerObserver(resetView);

// Players

var canvasPlayer = new mauler.players.CanvasPlayer({
    controller: controller,
    canvasView: canvasView
});

var players = [canvasPlayer, canvasPlayer];
controller.players = players;