let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for(let i=0; i<200; i++) {
    let ball = document.createElement("a-sphere");
    ball.setAttribute("position", `${rnd(-10,10)},${rnd(5,20)},${rnd(-10,10)}`);
    ball.setAttribute("radius", rnd(0.5,1));
    ball.setAttribute("color", `hsl(${rnd(0,360)},100%,50%)`);
    ball.setAttribute("dynamic-body", "");
    ball.setAttribute("velocity", `${rnd(-10,10)},${rnd(-10,10)},${rnd(-10,10)}`);
    scene.appendChild(ball);
  }


  
})