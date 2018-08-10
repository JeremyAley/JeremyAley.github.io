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
player.attackDamagePercentage = 1;
player.attackDamageBase = 1;
player.attackDamage = player.attackDamageBase * player.attackDamagePercentage;

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
    $(".sprite").mousedown(function(){
       $(".sprite").attr("src", "assets/img/Mons2sad.png"); 
    });
    
    $(".sprite").mouseup(function(){
       $(".sprite").attr("src", "assets/img/Mons%202.png"); 
    });
    
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
        $("#autoAttackCurrentCost").text(upgrades.autoAttackCurrentCost.toFixed());
    });
    
    
    $("#buySuppressingBlade").click(function(){
        if (player.currentGold >= upgrades.suppressingBladeCurrentCost){
            player.attackDamage += upgrades.suppressingBladeDamageIncrease;
            player.currentGold -= upgrades.suppressingBladeCurrentCost;
            upgrades.suppressingBladeCurrentCost = Math.round(upgrades.suppressingBladeCurrentCost.toFixed() * 1.5);
            $("#suppressingBladeCurrentCost").text(upgrades.autoAttackCurrentCost.toFixed());
                
        }
    });
    
    
    
    $("#buyHeavenlyCutlass").click(function(){
        if (player.currentGold >= upgrades.heavenlyCutlassCurrentCost){
            player.attackDamageBase += upgrades.heavenlyCutlassDamageIncrease;
            player.currentGold -= upgrades.heavenlyCutlassCurrentCost;
            upgrades.heavenlyCutlassCurrentCost = Math.round(upgrades.heavenlyCutlassCurrentCost.toFixed() * 1.5);
            $("#heavenlyCutlassCurrentCost").text(upgrades.heavenlyCutlassCurrentCost.toFixed());
                
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
   $("#playerGold").text(player.currentGold.toFixed());
    healthPercentage = creep.currentHealth / creep.totalHealth * 100 +"%";
    document.querySelector("#bar").style.width = healthPercentage;
    $("#autoAttackCurrentCost").text(upgrades.autoAttackCurrentCost.toFixed());
    $("#suppressingBladeCurrentCost").text(upgrades.suppressingBladeCurrentCost.toFixed());
    $("#heavenlyCutlassCurrentCost").text(upgrades.heavenlyCutlassCurrentCost.toFixed());
    
    
           
          
           
       if (creep.currentHealth <= 0) {
            player.creepScore ++;
            player.currentGold ++;
            creep.currentHealth = creep.totalHealth;
            $("#creepHealth").text(parseFloat(Number(creep.currentHealth.toFixed(2))));
            $("#creepScore").text(player.creepScore);
            $("#playerGold").text(player.currentGold.toFixed());
            
           
           
           
       }
    
   
}