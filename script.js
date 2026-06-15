let gameStats = "Nothing yet"
let gameHealthPlayer = 500
let gameHealthEnemy = 700
Var gameAttacksPlayer = ["Mega-Blast_Power350-press 1", "Overpower_Power100-press 2", "four-Insane_Power40-press 3"]
let gameAttacksEnemy = ["Dungon_Power50", "underpower_Power40"]
let text = "Game under This text"
function initGame() { 

}
 const btn = document.getElementById('gameBtn');  
        btn.onclick = function() { 
            initGame(); 
            console.log("Started Game");  
document.getElementById("new").textContent = text; 
});
setInterval(() => { 
window.addEventListener("keydown", function(event) {
    if (event.key === "1") {
      
    } else if (event.key === "2") {
      
    } else if (event.key === "3") {
      
    }
 document.getElementId("game-stats").textContent = gameStats;
 document.getElementId("game-health-player").textContent = gameHealthPlayer;
}, 1); 
