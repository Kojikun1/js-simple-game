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
             case "Rougue":
                 player = new Player(classType,200,100,200,100,50);
              break;
             case "Mage":
                 player = new Player(classType,200,100,100,100,100);
              break;
             case "Hunter":
                 player = new Player(classType,200,100,200,100,50);
              break;
             default:
                 console.log("A error occurred - failure to create obj player");
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
        const header = document.querySelector('.header');
        const actions = document.querySelector('.actions');
        const arena = document.querySelector(".arena");
        const enemy = document.querySelector('.enemy');

        header.innerHTML = '<h2>Choose You Move</h2>';

        actions.innerHTML = '<a href="#" class="btn-search">Search for Enemy</a>';

        document.querySelector('.btn-search').addEventListener("click",this.setFight);

        arena.style.display = "block";
    },
    setFight(){
        const getEnemy = document.querySelector(".enemy");

        let choose = Math.floor(Math.random() * 4);
        switch(choose){
            case 0:
                enemy = new Enemy("Globlin",100,0,50,100,100);
               break;
            case 1:
                enemy = new Enemy("Troll",200,0,150,80,100);
                break;
            case 2:
                    enemy = new Enemy("Wolf",100,0,50,100,100);
                break;
            case 3:
                    enemy = new Enemy("Aligator",200,0,150,80,100);
                break;
        };
        function capilalize(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        let obj_data_html = "";
        for(let key in enemy){
           obj_data_html += `<p>${capilalize(key)}: ${enemy[key]}</p>`;
        }
        getEnemy.innerHTML = `<a><img src="img/enemy/${enemy.enemyType.toLowerCase()}.jpg">
        <div>${obj_data_html}</div></a>`;
    }
}