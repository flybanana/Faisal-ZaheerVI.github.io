var player;

// load images
var playerImg = new Image();
playerImg.src = "imgs/flyman.png";

function startGame() {
    game.start();
    player = new Player(100, 100, "red", 10, 120);
}

var game = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            game.keys = (game.keys || []);
            game.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            game.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function Player(width, height, color, x, y) {
    this.gamearea = game;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = game.context;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }
    this.move = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    game.clear();
    player.speedX = 0;
    player.speedY = 0;    
    if (game.keys && game.keys[37] || game.keys[37]) {player.speedX = -2; }
    if (game.keys && game.keys[39]) {player.speedX = 2; }
    if (game.keys && game.keys[38]) {player.speedY = -2; }
    if (game.keys && game.keys[40]) {player.speedY = 2; }
    player.move();    
    player.update();
}
