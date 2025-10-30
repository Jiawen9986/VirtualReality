let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i=0; i<100; i++){
    let rocket = new Rocket(rnd(-60,60), rnd(0,5), rnd(-60,60));
    rockets.push(rocket);
  }


  for(let i=0; i<100; i++){
    let ufo = new Ufo(rnd(-50,50), rnd(10,30), rnd(-50,50), rnd(3, 30)*0.01);
    ufos.push(ufo);
  }


  loop();
})




function loop(){


  for(let rocket of rockets){
    rocket.ascend();
  }


  for(let ufo of ufos){
    ufo.invade();
  }


  window.requestAnimationFrame( loop );
}
