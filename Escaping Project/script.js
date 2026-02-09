let scene, camera;
let bullets = [];
let ammo = 10;
let score = 0;
let timeLeft = 60;
let gameOver = false;




const WORLD_LIMIT = 120;


let lastShot = 0;
const COOLDOWN = 250;


window.addEventListener("DOMContentLoaded", () => {
 scene = document.querySelector("a-scene");
 camera = document.querySelector("#player");
 window.addEventListener("keydown", shoot);


 updateHUD();
 requestAnimationFrame(loop);
 setTimeout(countdown, 1000);
});


function shoot(e) {
 if (gameOver) return;
 if (e.key !== " ") return;


 const now = Date.now();
 if (now - lastShot < COOLDOWN) return;
 if (ammo <= 0) return;


 lastShot = now;
 ammo--;


 bullets.push(new Bullet(scene, camera));
 updateHUD();
}




function loop() {
 if (gameOver) return;


 for (let i = bullets.length - 1; i >= 0; i--) {
   const b = bullets[i];
   b.step();


   const p = b.obj.object3D.position;
   if (Math.abs(p.x) > WORLD_LIMIT || Math.abs(p.z) > WORLD_LIMIT || b.life > 240) {
     b.obj.remove();
     bullets.splice(i, 1);
   }
 }
 requestAnimationFrame(loop);
}


function countdown() {
 if (gameOver) return;


 timeLeft--;
 updateHUD();


 if (timeLeft <= 0) endGame(false);
 else setTimeout(countdown, 1000);
}






function updateHUD() {
 document.querySelector("#hudScore")
   .setAttribute("text", "value", `Score: ${score}`);
 document.querySelector("#hudAmmo")
   .setAttribute("text", "value", `Ammo: ${ammo}`);
 document.querySelector("#hudTime")
   .setAttribute("text", "value", `Time: ${timeLeft}`);
 document.querySelector("#hudEnemies")
   .setAttribute("text", "value", `Enemies left: 0`);
}


function dist(a, b) {
 const p1 = a.object3D.position;
 const p2 = b.object3D.position;
 return Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);
}
