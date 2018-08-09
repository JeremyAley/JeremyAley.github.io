var game = {};
var player = {};
var creep = {};
var upgrades = {};
var healthPercentage = "10%";
var setBar = document.querySelector(".bar");







game.baseInterval = 1000;

game.items = {
    quellingBlade : {
        currentCost : 5
    },
    divineRapier : {
        currentCost : 1000
    },
    autoAttack : {
        currentCost : 10
    }
};



player.name = "Defender";
player.creepScore = 0;
player.attackDamage = 1;
player.autoAttackCount = 0;
player.autoAddInterval = 0;
player.currentGold = 0;

creep.totalHealth = 10;
creep.currentHealth = 10;


upgrades.autoAttackBaseCost = 10;
upgrades.autoAttackCurrentCost = 10;



$(document).ready(function(){
    $("#playerName").text(player.name);
    
    $("#attackCreep").click(function(){
        if (creep.currentHealth >0) {
            creep.currentHealth -= player.attackDamage;
            $("#creepHealth").text(creep.currentHealth);
            healthPercentage = creep.currentHealth / creep.totalHealth * 100 +"%";
            document.querySelector("#bar").style.width = healthPercentage;
                        }
            
        if (creep.currentHealth <= 0) {
            player.creepScore ++;
            player.currentGold ++;
            creep.currentHealth = creep.totalHealth;
            $("#creepHealth").text(creep.currentHealth)
            $("#creepScore").text(player.creepScore)
            $("#playerGold").text(player.currentGold)}
            
        });
    
    $("#buyAutoAttack").click(function(){
        if (player.currentGold >= upgrades.autoAttackCurrentCost){
        player.autoAttackCount ++;
        player.autoAddInterval -=  0.2;
        player.currentGold -= upgrades.autoAttackCurrentCost;
        upgrades.autoAttackCurrentCost *= 1.5;}
    });
    
    window.setInterval(function(){
           update();
    },game.baseInterval);
    
});

function update(){
   
   creep.currentHealth += player.autoAddInterval;
   $("#creepHealth").text(creep.currentHealth);
   $("#creepScore").text(player.creepScore);
   $("#playerGold").text(player.currentGold);
    healthPercentage = creep.currentHealth / creep.totalHealth * 100 +"%";
    document.querySelector("#bar").style.width = healthPercentage;
    
    
    
           
           console.log (healthPercentage);
           
       if (creep.currentHealth <= 0) {
            player.creepScore ++;
            player.currentGold ++;
            creep.currentHealth = creep.totalHealth;
            $("#creepHealth").text(creep.currentHealth);
            $("#creepScore").text(player.creepScore);
            $("#playerGold").text(player.currentGold);
            
           
           
           
       }
    
   
}