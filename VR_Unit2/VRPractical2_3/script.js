let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }

  for(let i = 0; i < 80; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let cloud = new cloudObj(x, 10 , z);
  }  
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let house = new House(x, 0 , z);
  }

})
