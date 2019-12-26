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
        /* interface.innerHTML = "<a><img src=img/avatars-characters/" +
         classType.toLowerCase() + ".jpg>" + "<div><h3>" + classType +
         "</h3><p>Health: "+ player.health + "</p><p>Mana: " + player.mana +
         "</p><p>Strenght: "+ player.strenght + "</p><p>Agility:"+ player.agility + 
         "</p><p>Speed:"+ player.speed + "</p></div></a>" */
         function capilalize(word){
             return word.charAt(0).toUpperCase() + word.slice(1);
         }
         let obj_data_html = "";
         for(let key in player){
            obj_data_html += `<p>${capilalize(key)}: ${player[key]}</p>`;
         }
         interface.innerHTML = `<a><img src="img/avatars-characters/${classType.toLowerCase()}.jpg">
         <div>${obj_data_html}</div></a>`;

    },
    setPreFight: function(){
           
    }
}