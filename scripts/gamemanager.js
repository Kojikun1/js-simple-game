let gameManager = {
    setStartGame: function(classType){
       console.log("Game starts");
       this.setResetGame(classType);
       this.setPreFight();
    },
    setResetGame: function(classType){
         switch(classType){
             case "Warrior":
                 player = new Player(classType,200,100,200,100,50);
             break;
             case "Rogue":
                 player = new Player(classType,200,100,200,100,50);
             break;
             case "Mage":
                 player = new Player(classType,200,100,100,100,100);
             break;
             case "Hunter":
                 player = new Player(classType,200,100,200,100,50);
             break;
         };
         const interface = document.querySelector('.interface');
         interface.innerHTML = "<a><img src=img/avatars-characters/" +
         classType.toLowerCase() + ".jpg>" + "<h3>" + classType +"</h3></a>";

    },
    setPreFight: function(){
           
    }
}