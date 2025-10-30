let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i=0; i<100; i++){
    let rocket = new Rocket(rnd(-60,60), rnd(0,5), rnd(-60,60));
    rockets.push(rocket);
  }


  loop();
})


function loop(){


  for(let rocket of rockets){
    rocket.ascend();
  }


  window.requestAnimationFrame( loop );
}
