let maze = [
  "tt-tttttttttttttttttttttttttttttttttttt",
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
let scene, camera;
let bullets = [];
let targets = []; // 专门存放可被击碎的 e 墙
let ammo = 10;    // 初始10枚弹药
let lastShot = 0;
const COOLDOWN = 250;
const WORLD_LIMIT = 120;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("#player"); //
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c,1,r)
      }
      else if(cols[c] == "p"){
        let p = new Plant(c, 1, r); // 只创建一次
        if(p.obj) targets.push(p.obj); // 确保它被加入射击目标
      }
      else if(cols[c] == "h"){
        new Heart(c,1,r);
      }
      else if(cols[c] == "t"){
        new Tree(c,1,r);
      }
      else if(cols[c] == "e"){
        new Golden(c,1,r);
      }
      else if(cols[c] == "g"){
        new Glass(c,1,r);
      }
  }
}



  window.addEventListener("keydown", shoot);

    // 3. 启动游戏主循环
    requestAnimationFrame(loop);
  });

  function shoot(e) {
  if (e.key !== " ") return; // 检查是否为空格

  const now = Date.now();
  if (now - lastShot < COOLDOWN) return; // 冷却时间未到
  if (ammo <= 0) return;                // 没子弹了

  lastShot = now;
  ammo--; // 减少弹药

  // 这里的 Bullet 必须已经在 bullet.js 中定义好
  if (typeof Bullet !== "undefined") {
    bullets.push(new Bullet(scene, camera));
  } 
}

  function loop() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.step(); // 调用 bullet.js 里的移动方法

    const p = b.obj.object3D.position;



    // A. 范围检查：子弹飞太远则移除
    if (Math.abs(p.x) > WORLD_LIMIT || Math.abs(p.z) > WORLD_LIMIT || b.life > 240) {
      b.obj.remove();
      bullets.splice(i, 1);
      continue;
    }


    for (let j = targets.length - 1; j >= 0; j--) {
      if (getDistance(b.obj, targets[j]) < 1.5) {
        // 植物墙消失
        targets[j].remove();
        targets.splice(j, 1);
        // 子弹消失
        b.obj.remove();
        bullets.splice(i, 1);
        break; 
      }
    }
  }
  requestAnimationFrame(loop);
}

// --- 距离辅助函数 ---
function getDistance(obj1, obj2) {
  const p1 = obj1.object3D.position;
  const p2 = obj2.object3D.position;
  return Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);
}

