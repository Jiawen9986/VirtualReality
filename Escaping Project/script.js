let scene, camera;
let bullets = [];
let targets = []; 
let ammo = 10;    // 1. 只有10枚弹药
let lastShot = 0;
const COOLDOWN = 300;

const maze = [
  "ttttttttttttttttttttttttttttttttttttttt",
  "tx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxt",
  "tx-p-----------x-xhx-------x---x-----xt",
  "tx-x-xxxxxxxxx-x-x-xpxxxxx-x-x-x-xpx-xt",
  "tx-x-------x-x-x-x-------x---x-x-x-x-xt",
  "tx-xxxxxpx-x-x-x-xxxxxxxxxxxxxpx-x-x-xt",
  "tx-----x-x-x-x-x---x-------------x-x-xt",
  "txxxxx-x-x-x-x-xxx-x-xxxxxpxxxxxxx-x-xt",
  "tx-----x-x-x---x---x-x---x-xhx-----x-xt",
  "tx-xxxxxxxpxxxxx-xxx-x-x-x-x-x-xxxxx-xt",
  "tx---x-x-------x-x---x-x-x-x-x-x-----xt",
  "txxx-x-x-xxxxx-x-x-xxx-x-x-x-x-x-xxxxxt",
  "tx-p-x-x-x---x-x-x-x-x-x-x-x---x-----xt",
  "tx-x-x---x-x-x-x-x-x---x-x-xxxxxxxxx-xt",
  "tx-x-xxxxx-x-x-x-x-xxxxx-x-x---x--hx-xt",
  "tx-x-------x-x---x-x-----x-x---xpxxx-xt",
  "tx-xxxxxxxxx-xxxxx-x-xxxxx-x-x-x-----xt",
  "tx-x---x---x-------x---x---x-x-xxxxxpxt",
  "tx-x-x-xxx-xxxxxxxxxxx-x-xxx-x-x---x-xt",
  "tx---x-----x---x-----x-x-x---x-x-x-x-xt",
  "txxxxxxxxxxx-x-xpxxx-x-x-xxxxx-x-x-xxxt",
  "tx---x-------x-p-p-x---x-x-----x-x---xt",
  "tx-x-x-xxxxxxxxxpxxxxxxx-x-xxxxx-xxx-xt",
  "tx-x-x-x-------xhx-------x---x---x---xt",
  "tx-x---x-xxxxx-xxx-xxxxxxxxx-x-xxx-xxxt",
  "tx-xxxxx-x---x-x---x---x-----x-x---x-xt",
  "tx-----x-x-x-x-x-xxx-x-x-x-xxx-x-xxx-xt",
  "txxxxx-x-x-x-x---x---x---x-x-p-x-----xt",
  "tx---x-x-x-xxxxxxx-x-xxxxxxx-x-xxxxx-xt",
  "tx-x-x-x-x---------x-x-------x-----x-xt",
  "tx-x---x-xxxpxxxxxxxxx-xxxxxxxxxpxxx-xt",
  "tx-x-xxx-----------x---x---x-----x---xt",
  "tx-x-x-p-xpxxxxxxxpx-xxx-x-x-xxxxxgxxxt",
  "tx-xxx-x-x-------x-x-x---x-x-x-x---x-xt",
  "tx-----x-x-x---x-----xhx-x-----x-x---xt",
  "txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxext",
  "ttttttttttttttttttttttttttttttttttttttt",
];

// 初始化逻辑
window.addEventListener("load", () => {
    scene = document.querySelector("a-scene");
    camera = document.querySelector("#player");
    
    // 生成迷宫
    if (scene) {
        generateMaze();
        requestAnimationFrame(loop);
    }
});

function generateMaze() {
    for(let r = 0; r < maze.length; r++){
        let cols = maze[r].split("");
        for(let c = 0; c < cols.length; c++){
            let char = cols[c];
            // 简单的生成逻辑，捕获错误防止卡死
            try {
                if(char === "x") new Wall(c, 1, r);
                else if(char === "p") new Plant(c, 1, r);
                else if(char === "h") new Heart(c, 1, r);
                else if(char === "t") new Tree(c, 1, r);
                else if(char === "g") new Glass(c, 1, r);
                else if(char === "e") {
                    // 5. 特殊处理 e 墙
                    let goal = new Golden(c, 1, r);
                    if (goal.obj) targets.push(goal.obj); 
                }
            } catch (err) {
                console.error("生成物体失败:", char, err);
            }
        }
    }
}

// 3. 按下 Space 发射
window.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        shoot();
    }
});

function shoot() {
    const now = Date.now();
    if (now - lastShot < COOLDOWN || ammo <= 0) return; // 2. 不补充弹药

    lastShot = now;
    ammo--;

    if (typeof Bullet !== "undefined") {
        bullets.push(new Bullet(scene, camera));
    }
}

function loop() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.step();

        const p = b.obj.object3D.position;
        if (Math.abs(p.x) > 100 || Math.abs(p.z) > 100 || b.life > 300) {
            b.obj.remove();
            bullets.splice(i, 1);
            continue;
        }

        // 碰撞判定：当子弹碰到 e 墙
        for (let j = targets.length - 1; j >= 0; j--) {
            if (getDistance(b.obj, targets[j]) < 1.5) {
                targets[j].remove(); // 墙消失
                targets.splice(j, 1);
                b.obj.remove();      // 子弹消失
                bullets.splice(i, 1);
                break;
            }
        }
    }
    requestAnimationFrame(loop);
}

function getDistance(a, b) {
    const p1 = a.object3D.position;
    const p2 = b.object3D.position;
    return Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);
}