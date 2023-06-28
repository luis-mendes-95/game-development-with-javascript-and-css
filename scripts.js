function startAnimation() {
  var audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();

  var projectile = document.createElement("div");
  projectile.classList.add("projectile");

  var background = document.querySelector(".background");
  background.appendChild(projectile);

  projectile.style.animation = "moveProjectile 3s linear";

  setTimeout(function () {
    projectile.style.animation = "";
    removeProjectile(projectile);
  }, 3000);
}

function removeProjectile(projectile) {
  projectile.parentNode.removeChild(projectile);
}

window.addEventListener('DOMContentLoaded', function() {
  var square = document.createElement('div');
  square.classList.add('square');
  
  var background = document.querySelector('.background');
  background.appendChild(square);
});
