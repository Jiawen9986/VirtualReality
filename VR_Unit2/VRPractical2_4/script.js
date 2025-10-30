let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  for(let i = 0; i < 100; i++){
    let x = rnd(0,20);
    let y = rnd(0,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x, y , z);
  }

  loop();
})

function loop(){
  rocket.setAttribute("rotation", {x:rocket.getAttribute("position").x+=0.1, y:0, z:0} );
  rocket.launch();

  
  window.requestAnimationFrame( loop );
}