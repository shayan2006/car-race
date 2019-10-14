class Game{
    constructor(){
    
    }
    play(){
        form.hide()
        textSize(30)
        text("gamestart",120,100)
        Player.getPlayerInfo();
        var index=0;
        var x=175
        var y=0
        for(var plr in allPlayer){
        index= index+1 
        x=x+200;
        y = displayHeight-allPlayer[plr].distance;
        
        if(allPlayer!==undefined){
            var display_position = 130
            display_position += 20
            textSize(15)
            text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,display_position);
        }
    }
    }
    getState(){
        var gameStateRef=database.ref('gamestate')
        gameStateRef.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    start(){
        if(gamestate===0){
            player=new Player()
            player.getCount()
            form=new form();
            form.display();
        }
    }
}