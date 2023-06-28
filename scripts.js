function checkCollision(projectile, enemy) {
  var seeCollision = true;
  var projectileRect = projectile.getBoundingClientRect();
  var enemyRect = enemy.getBoundingClientRect();

  if (
    projectileRect.left < enemyRect.right &&
    projectileRect.right > enemyRect.left &&
    projectileRect.top < enemyRect.bottom &&
    projectileRect.bottom > enemyRect.top
  ) {
    // Colisão detectada!
    removeProjectile(projectile);

    // Substituir imagem do inimigo
    enemy.src = "explosion.gif";
    enemy.classList.add("collision");

    // Reproduzir som de explosão
    var audio = document.getElementById("explosion-audio");
    audio.currentTime = 0;
    audio.play();

    setTimeout(function () {
      enemy.parentNode.removeChild(enemy);
      spawnEnemy();
    }, 1500);
  }
}

function spawnEnemy() {
  var enemy = document.createElement('img');
  enemy.src = 'enemy.gif';
  enemy.classList.add('enemy');

  var background = document.querySelector('.background');
  background.appendChild(enemy);
}

function startAnimation() {
  var audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();

  var projectile = document.createElement("img");
  projectile.src = "./arrow.png";
  projectile.classList.add("projectile");

  var background = document.querySelector(".background");
  background.appendChild(projectile);

  projectile.style.animation = "moveProjectile 0.15s linear";

  var enemy = document.querySelector(".enemy");

  var collisionDetectionInterval = setInterval(function () {
    checkCollision(projectile, enemy);
  }, 10);

  setTimeout(function () {
    projectile.style.animation = "";
    clearInterval(collisionDetectionInterval);
    removeProjectile(projectile);
  }, 150);
}

function removeProjectile(projectile) {
  projectile.parentNode.removeChild(projectile);
}

window.addEventListener('DOMContentLoaded', function() {
  spawnEnemy();
});
