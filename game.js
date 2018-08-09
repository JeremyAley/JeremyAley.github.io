var game = {};
var player = {};
var creep = {};
var upgrades = {};
var healthPercentage = "10%";
var setBar = document.querySelector(".bar");



game.baseInterval = 1000;




player.name = "Developer";
player.creepScore = 0;

player.autoAttackCount = 0;
player.autoAddInterval = 0;
player.currentGold = 100;
player.attackDamagePercentage = 3;
player.attackDamgeBase = 3;
player.attackDamage = 1;

creep.totalHealth = 10;
creep.currentHealth = 10;



upgrades.autoAttackBaseCost = 5;
upgrades.autoAttackCurrentCost = 5;
upgrades.autoAttackCount = 0;

upgrades.suppressingBladeCurrentCost = 10;
upgrades.suppressingBladeDamageIncrease = 1;


upgrades.heavenlyCutlassCurrentCost = 100;
upgrades.heavenlyCutlassDamageIncrease = player.attackDamageBase*1.1;




$(document).ready(function(){
    $("#playerName").text(player.name);
    
    $("#attackCreep").click(function(){
        if (creep.currentHealth >0) {
            creep.currentHealth -= player.attackDamage;
            $("#creepHealth").text(parseFloat(Number(creep.currentHealth.toFixed(2))));
            healthPercentage = creep.currentHealth / creep.totalHealth * 100 +"%";
            document.querySelector("#bar").style.width = healthPercentage;
                        }
            
        if (creep.currentHealth <= 0) {
            player.creepScore ++;
            player.currentGold ++;
            creep.currentHealth = creep.totalHealth;
            $("#creepHealth").text(creep.currentHealth)
            $("#creepScore").text(player.creepScore)
            $("#playerGold").text(player.currentGold.toFixed())}
            
        });
    
    $("#buyAutoAttack").click(function(){
        if (player.currentGold >= upgrades.autoAttackCurrentCost){
        player.autoAttackCount ++;
        player.autoAddInterval -=  0.2;
        player.currentGold -= upgrades.autoAttackCurrentCost;
        upgrades.autoAttackCurrentCost *= 1.5;
        upgrades.autoAttackCount++}
        $("#autoAttackCurrentCost").text(upgrades.autoAttackCurrentCost);
    });
    
    
    $("#buySuppressingBlade").click(function(){
        if (player.currentGold >= upgrades.suppressingBladeCurrentCost){
            player.attackDamage += upgrades.suppressingBladeDamageIncrease;
            player.currentGold -= upgrades.suppressingBladeCurrentCost;
            upgrades.suppressingBladeCurrentCost = Math.round(upgrades.suppressingBladeCurrentCost * 1.5);
            $("#suppressingBladeCurrentCost").text(upgrades.autoAttackCurrentCost);
                
        }
    });
    
    
    
    $("#buyHeavenlyCutlass").click(function(){
        if (player.currentGold >= upgrades.heavenlyCutlassCurrentCost){
            player.attackDamageBase += upgrades.heavenlyCutlassDamageIncrease;
            player.currentGold -= upgrades.heavenlyCutlassCurrentCost;
            upgrades.heavenlyCutlassCurrentCost = Math.round(upgrades.heavenlyCutlassCurrentCost * 1.5);
            $("#heavenlyCutlassCurrentCost").text(upgrades.heavenlyCutlassCurrentCost);
                
        }
    });
    
    
    window.setInterval(function(){
           update();
    },game.baseInterval);
    
});

function update(){
   
   creep.currentHealth += player.autoAddInterval;
   $("#creepHealth").text(parseFloat(Number(creep.currentHealth.toFixed(2))));
   $("#creepScore").text(player.creepScore);
   $("#playerGold").text(player.currentGold);
    healthPercentage = creep.currentHealth / creep.totalHealth * 100 +"%";
    document.querySelector("#bar").style.width = healthPercentage;
    $("#autoAttackCurrentCost").text(upgrades.autoAttackCurrentCost);
    $("#suppressingBladeCurrentCost").text(upgrades.suppressingBladeCurrentCost);
    $("#heavenlyCutlassCurrentCost").text(upgrades.heavenlyCutlassCurrentCost);
    
    
           
          
           
       if (creep.currentHealth <= 0) {
            player.creepScore ++;
            player.currentGold ++;
            creep.currentHealth = creep.totalHealth;
            $("#creepHealth").text(parseFloat(Number(creep.currentHealth.toFixed(2))));
            $("#creepScore").text(player.creepScore);
            $("#playerGold").text(player.currentGold);
            
           
           
           
       }
    
   
}