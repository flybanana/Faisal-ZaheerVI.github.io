var player;

// load images
var playerImg = new Image();
playerImg.src = "imgs/flyman.png";

function startGame() {
    game.start();
    player = new Player(90, 90, "red", 100, 120);
}

var game = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function Player(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = game.context;
    ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
}
