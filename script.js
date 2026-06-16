let enemyAttackNumber = Math.floor(Math.random() * 2) + 2;
let gameStats = "Nothing yet";
let gameHealthPlayer = 500;
let gameHealthEnemy = 700;
var gameAttacksPlayer = ["Mega-Blast_Power350-press 1", "Overpower_Power100-press 2", "four-Insane_Power40-press 3"];
var gameAttacksEnemy = ["Dungon_Power50", "underpower_Power40"];
let text = "Game under This text";

function initGame() { 
  console.log("Started Game");  
  document.getElementById("new").textContent = text; 
  
  window.addEventListener("keydown", function(event) {
    if (event.key === "1") {
      gameHealthEnemy -= 350;
      enemyAttackNumber = Math.floor(Math.random() * 2) + 2;
      if (enemyAttackNumber === 2) {
        gameHealthPlayer -= 50;
      } else if (enemyAttackNumber === 3) {
        gameHealthPlayer -= 40;
      }
    } else if (event.key === "2") {
      gameHealthEnemy -= 100;
      enemyAttackNumber = Math.floor(Math.random() * 2) + 2;
      if (enemyAttackNumber === 2) {
        gameHealthPlayer -= 50;
      } else if (enemyAttackNumber === 3) {
        gameHealthPlayer -= 40;
      }
    } else if (event.key === "3") {
      gameHealthEnemy -= 40;
      enemyAttackNumber = Math.floor(Math.random() * 2) + 2;
      if (enemyAttackNumber === 2) {
        gameHealthPlayer -= 50;
      } else if (enemyAttackNumber === 3) {
        gameHealthPlayer -= 40;
      }
    }
  });

  setInterval(() => { 
    document.getElementById("game-stats").textContent = gameStats;
    document.getElementById("game-health-player").textContent = gameHealthPlayer;
    document.getElementById("game-health-enemy").textContent = gameHealthEnemy;
    document.getElementById("game-attacks-player").textContent = gameAttacksPlayer;
    document.getElementById("game-attacks-enemy").textContent = gameAttacksEnemy;
  }, 4); 
}

const btn = document.getElementById('gameBtn');  
btn.onclick = function() { 
  initGame(); 
};
