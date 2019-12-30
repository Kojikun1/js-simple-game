let player;

function Player(classType, health, mana,strenght,agility,speed){
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strenght = strenght;
    this.agility = agility;
    this.speed = speed;
    this.type = "Player";
}

let playerMoves = {
    calcAttacks: function(){
        // who attacks first // 
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // player attack ///
        let calcAttackDamage = function(character,opponent){
           let calcBaseDamage;
           if(character.mana > 0){
              calcBaseDamage = character.strenght * character.mana / 1000;
           }else{
              calcBaseDamage = character.strenght * character.agility / 1000;
           }
           // random num offset 
           let offSetDamage = Math.floor(Math.random() * 10);
           let calcOutputDamage = calcBaseDamage + offSetDamage;
           // Number of Hits
           let numberOfHits = Math.floor(Math.random() * (character.agility / 10) / 2) + 1;

           let getPlayerHealth = document.querySelector(".health-player");
           let getEnemyHealth = document.querySelector(".health-enemy");
           
           // attack init //

           let totalDamage =  calcOutputDamage * numberOfHits;

           opponent.health = opponent.health - totalDamage;

           alert(`${character.type} Hit ${calcOutputDamage} damage ${numberOfHits} times`);

            if(opponent.type == "Enemy"){
                if(opponent.health <= 0){
                    alert(`${character.type}Win! Refresh the Browser to Play Again`);
                    getEnemyHealth.innerHTML = "Health: 0" ;
                }else{
                     getEnemyHealth.innerHTML = "Health" + opponent.health;
                     calcAttackDamage(enemy,player);
                }
            }else if(opponent.type == "Player"){
                if(opponent.health <= 0){
                    alert(`${character.type}Win! Refresh the Browser to Play Again`);
                    getPlayerHealth.innerHTML = "Health: 0" ;
                }else{
                     getPlayerHealth.innerHTML = "Health" + opponent.health;
                     calcAttackDamage(player,enemy);
                };
            };
        };
        // call function attack
        if(getPlayerSpeed >= getEnemySpeed){
            calcAttackDamage(player,enemy);
        }else{
            calcAttackDamage(enemy,player);
        };
    }
};

//playerMoves.calcAttacks();