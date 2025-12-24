let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0;
let time_remaining = 30, total_snowmen = 5, game_over = false, ui_text;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  createUI();

  for(let i = 0; i < 50; i++){
    let tree = new Tree(rnd(-45,45), 0 , rnd(-20,15));
    tree.scale(rnd(1,4));
  }

  for(let i = 0; i<10; i++){
    let snowman = new Snowman(rnd(-45,45),rnd(-20,17));
    enemies.push(snowman);
  }

  for(let i = 0; i<20; i++){
    let box = new BulletBox(rnd(-45,45),0,rnd(-20,17));
  }

  window.addEventListener("keydown",function(e){
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  if(bullet){
    bullet.fire()
    
    for(let i = enemies.length - 1; i >= 0; i--){
      let enemy = enemies[i]
      if(distance(bullet.obj, enemy.obj) < 1.5){
        enemy.destroy()
        enemies.splice(i, 1)
        enemy_killed++
        updateUI()
        
        if(enemies.length === 0){
          endGame(true) // win
        }
        break
      }
    }
  }

  for(let i = ammo_boxes.length - 1; i >= 0; i--){
    let b = ammo_boxes[i]
    if(distance(camera, b.obj) < 2){ 
      b.pickup()
    }
  }
  window.requestAnimationFrame(loop)
}

function countdown(){
  if(!game_over){
    time_remaining--
    updateUI()
    
    if(time_remaining <= 0){
      endGame(false)
    }
  }
  setTimeout(countdown,1000)
}

function createUI(){
  ui_text = document.createElement('div')
  ui_text.id = 'game-ui'
  ui_text.style.position = 'fixed'
  ui_text.style.top = '20px'
  ui_text.style.left = '20px'
  ui_text.style.color = 'white'
  ui_text.style.fontSize = '24px'
  ui_text.style.fontFamily = 'Arial, sans-serif'
  ui_text.style.zIndex = '100'
  ui_text.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)'
  document.body.appendChild(ui_text)
  updateUI()
}

function updateUI(){
  ui_text.innerHTML = `Ammo: ${ammo_count}<br>Snowmen Killed: ${enemy_killed}/10 <br>Time: ${time_remaining}s`
}

function endGame(won){
  game_over = true
  let message = won ? 'You Win!' : 'You Lose!'
  ui_text.innerHTML = `Ammo: ${ammo_count}<br>Snowmen Killed: ${enemy_killed}/10 <br>Time: ${time_remaining}s<br><span style="color: ${won ? 'lime' : 'red'}; font-size: 36px;">${message}</span>`
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}