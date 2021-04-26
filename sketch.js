var form,game;
var gamestate=0;
var playercount;
var database;
var position;

function setup(){
   
    database = firebase.database();
    createCanvas(500,500);
    game=new Game()
    game.getstate()
    game.start()
}

function draw(){
    background("white");
   
    drawSprites();
}
