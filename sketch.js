var ball;
var gamestate=0
var playerCount=0,database,player,allPlayer,game;
function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    ball = createSprite(250,250,10,10);
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
   if(playerCount===4){
       game.update(1);
   }
   if(gamestate===1){
       clear()
       game.play()
   }
}

