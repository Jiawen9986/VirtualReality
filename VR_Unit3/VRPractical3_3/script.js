let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, ammo_boxes = [], ammo_count = 10, ufos=[], bulletText, scoreText, score=0, time, t = 25;
let gameOver = false;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  bulletText = document.querySelector("#bullets");
  scoreText = document.querySelector("#score");
  time = document.getElementById("time");

  countdown();

  bulletText.setAttribute("value",
    `Bullets:  ${ammo_count}`);
    
  scoreText.setAttribute("value",
    `Score:  ${score}`);

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })
  
  setTimeout(loop,100);

  for(let i=0; i<30; i++){
    let x = rnd(-100,100);
    let z = rnd(-100,100);

    let ufo = new UFO(x,50,z);
    ufos.push(ufo);

    loop();
  }
})

function countdown(){
  time.setAttribute("value",`Time: ${t}`);
  t--;

  if (t < 0){
    gameOver = true;
    document.querySelector("#gameover").setAttribute("value","GAME OVER");
    
  }

  setTimeout(countdown,1000);


}

function loop(){
  if (gameOver) return;

 if(bullet){
    bullet.fire();

  bulletText.setAttribute("value",
    `Bullets:  ${ammo_count}`);
  }
 
  for(let ufo of ufos){
    ufo.invade();

    if (bullet && distance(ufo.obj,bullet.obj)<5 && !ufo.shot){
      ufo.shot = true;
      score+=50
      scoreText.setAttribute("value",
`Score:  ${score}`);
    }
    ufo.shrink();

  
  }


 
  window.requestAnimationFrame(loop);
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