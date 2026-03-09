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
let targets = []; 
let diamonds = [];
let glasses = [];
let goldens = [];
let ammo = 15;    
let lastShot = 0;
const COOLDOWN = 250;
const WORLD_LIMIT = 120;
let lastSafePos = { x: 2, y: 1.6, z: -2 }; 
let isWon = false;

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("#player"); 

  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x") new Wall(c,1,r);
      else if(cols[c] == "p"){
        let p = new Plant(c, 1, r);
        if(p.obj) targets.push(p.obj);
      }
      else if(cols[c] == "h"){
        let d = new Diamond(c,1,r);
        diamonds.push(d);
      }
      else if(cols[c] == "t") new Tree(c,1,r);
      else if(cols[c] == "e") {
        let e = new Golden(c,1,r);
        goldens.push(e);
      }
      else if(cols[c] == "g") {
        let g = new Glass(c,1,r);
        glasses.push(g);
      }
    }
  }

  window.addEventListener("keydown", shoot);
  requestAnimationFrame(loop);
});

function shoot(e) {
  if (e.key !== " " || ammo <= 0 || isWon) return;
  const now = Date.now();
  if (now - lastShot < COOLDOWN) return;
  
  lastShot = now;
  ammo--; 
  updateHUD();

  if (typeof Bullet !== "undefined") {
    bullets.push(new Bullet(scene, camera));
  } 
}

function loop() {
  if (isWon) return;

  const playerPos = camera.object3D.position;

  // --- A. 碰撞与安全位置记录 ---
  let gridX = Math.round(playerPos.x);
  let gridZ = Math.round(playerPos.z);

  if (maze[gridZ] && ["x", "t", "g", "p"].includes(maze[gridZ][gridX])) {
    playerPos.x = lastSafePos.x;
    playerPos.z = lastSafePos.z;
  } else {
    lastSafePos.x = playerPos.x;
    lastSafePos.z = playerPos.z;
  }

  // --- B. 胜利检测 (Golden) ---
  for (let gld of goldens) {
    let gPos = gld.obj.object3D.position;
    if (Math.hypot(playerPos.x - gPos.x, playerPos.z - gPos.z) < 0.8) {
      document.querySelector("#winScreen").setAttribute("visible", "true");
      isWon = true;
      return;
    }
  }

  // --- C. 钻石收集检测 ---
  for (let i = diamonds.length - 1; i >= 0; i--) {
    let dPos = diamonds[i].obj.object3D.position;
    if (Math.hypot(playerPos.x - dPos.x, playerPos.z - dPos.z) < 0.8) {
      diamonds[i].obj.remove();
      diamonds.splice(i, 1);
      updateHUD();
      if (diamonds.length === 0) removeGlasses();
    }
  }

  // --- D. 子弹逻辑 ---
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.step();
    const p = b.obj.object3D.position;

    if (Math.abs(p.x) > WORLD_LIMIT || Math.abs(p.z) > WORLD_LIMIT || b.life > 240) {
      b.obj.remove();
      bullets.splice(i, 1);
      continue;
    }

    for (let j = targets.length - 1; j >= 0; j--) {
      if (getDistance(b.obj, targets[j]) < 1.5) {
        updateMaze(targets[j]);
        targets[j].remove();
        targets.splice(j, 1);
        b.obj.remove();
        bullets.splice(i, 1);
        break; 
      }
    }
  }

  requestAnimationFrame(loop);
}

function removeGlasses() {
  for (let g of glasses) {
    updateMaze(g.obj);
    g.obj.remove();
  }
  glasses = [];
}

function updateMaze(obj) {
  let x = Math.round(obj.object3D.position.x);
  let z = Math.round(obj.object3D.position.z);
  if(maze[z]) {
    let row = maze[z].split("");
    row[x] = "-";
    maze[z] = row.join("");
  }
}

function updateHUD() {
  document.querySelector("#hudAmmo").setAttribute("text", "value", `Ammo: ${ammo}`);
  document.querySelector("#hudDiamonds").setAttribute("text", "value", `Diamonds Left: ${diamonds.length}`);
}

function getDistance(o1, o2) {
  return Math.hypot(o1.object3D.position.x - o2.object3D.position.x, o1.object3D.position.z - o2.object3D.position.z);
}