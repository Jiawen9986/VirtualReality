let scene, camera;
let bullets = [];
let enemies = [];
let ammo = 10;
let score = 0;
let lastShot = 0;
const COOLDOWN = 250;
const HIT_DIST = 1.1;
const WORLD_LIMIT = 120;

window.addEventListener("DOMContentLoaded", () => {
    scene = document.querySelector("a-scene");
    camera = document.querySelector("#player");
    requestAnimationFrame(loop);
    updateHUD();
});

window.addEventListener("keydown", shoot);

function shoot(e) {
    if (e.key !== " ") return;
    const now = Date.now();
    if (now - lastShot < COOLDOWN) return;
    if (ammo <= 0) {
        console.log("Out of ammo!");
        return;
    }

    lastShot = now;
    ammo--;
    bullets.push(new Bullet(scene, camera));
    
    updateHUD();
}

function loop() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        let b = bullets[i];
        b.step();
        let p = b.obj.object3D.position;

        if (Math.abs(p.x) > WORLD_LIMIT || Math.abs(p.z) > WORLD_LIMIT || b.life > 240) {
            b.obj.remove();
            bullets.splice(i, 1);
            continue;
        }

        for (let j = enemies.length - 1; j >= 0; j--) {
            if (dist(b.obj, enemies[j]) < HIT_DIST) {
                enemies[j].remove();
                enemies.splice(j, 1);
                b.obj.remove();
                bullets.splice(i, 1);
                score += 100;
                updateHUD();
                break;
                }
        }
    }
            requestAnimationFrame(loop);
        }

        function dist(a, b) {
            const p1 = a.object3D.position;
            const p2 = b.object3D.position;
            return Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);
}

function updateHUD() {
    const scoreText = document.querySelector("#hudScore");
    const ammoText = document.querySelector("#hudAmmo");
    
    if (scoreText) scoreText.setAttribute("value", `Score: ${score}`);
    if (ammoText) ammoText.setAttribute("value", `Ammo: ${ammo}`);
}
