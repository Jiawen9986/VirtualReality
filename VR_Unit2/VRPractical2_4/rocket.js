class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
 
    let top = document.createElement("a-cone");
    top.setAttribute("color","red");
    top.setAttribute("position","0 3 0");
    top.setAttribute("height","2");
    this.obj.append( top );
 
    let bottom = document.createElement("a-cylinder");
    bottom.setAttribute("position","0 0.5 0");
    bottom.setAttribute("color","white");
    bottom.setAttribute("radius","1");
    bottom.setAttribute("height","3");
    this.obj.append( bottom );
 
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  launch(){
    this.x += this.dx
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}
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



