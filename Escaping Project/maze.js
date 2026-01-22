let maze = [
  "x-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x-------------x-x-x-------x---x-----x",
  "x-xpxxxxxxxxx-x-x-x-xxxxx-x-x-x-x-x-x",
  "x-x-------x-x-x-x-------x---x-x-x-x-x",
  "x-xxxxx-x-x-x-x-xxxxxxxxxxxxx-x-x-x-x",
  "x-----x-x-x-x-x---x-------------x-x-x",
  "xxxxx-x-x-x-x-xxx-x-xxxxx-xxxxxxx-x-x",
  "x-----x-x-x---x---x-x---x-x-x-----x-x",
  "x-xxxxxxx-xxxxx-xxx-x-x-x-x-x-xxxxx-x",
  "x---x-x-------x-x---x-x-x-x-x-x-----x",
  "xxx-x-x-xxxxx-x-x-xxx-x-x-x-x-x-xxxxx",
  "x-p-x-x-x---x-x-x-x-x-x-x-x---x-----x",
  "x-x-x---x-x-x-x-x-x---x-x-xxxxxxxxx-x",
  "x-x-xxxxx-x-x-x-x-xxxxx-x-x---x---x-x",
  "x-x-------x-x---x-x-----x-x---x-xxx-x",
  "x-xxxxxxxxx-xxxxx-x-xxxxx-x-x-x-----x",
  "x-x---x---x-------x---x---x-x-xxxxx-x",
  "x-x-x-xxx-xxxxxxxxxxx-x-xxx-x-x---x-x",
  "x---x-----x---x-----x-x-x---x-x-x-x-x",
  "xxxxxxxxxxx-x-x-xxx-x-x-xxxxx-x-x-xxx",
  "x---x-------x-----x---x-x-----x-x---x",
  "x-x-x-xxxxxxxxx-xxxxxxx-x-xxxxx-xxx-x",
  "x-x-x-x-------x-x-------x---x---x---x",
  "x-x---x-xxxxx-xxx-xxxxxxxxx-x-xxx-xxx",
  "x-xxxxx-x---x-x---x---x-----x-x---x-x",
  "x-----x-x-x-x-x-xxx-x-x-x-xxx-x-xxx-x",
  "xxxxx-x-x-x-x---x---x---x-x---x-----x",
  "x---x-x-x-xxxxxxx-x-xxxxxxx-x-xxxxx-x",
  "x-x-x-x-x---------x-x-------x-----x-x",
  "x-x---x-xxxpxxxxxxxxx-xxxxxxxxx-xxx-x",
  "x-x-xxx-----------x---x---x-----x---x",
  "x-x-x---xpxxxxxxx-x-xxx-x-x-xxxxx-xxx",
  "x-xxx-x-x-------x-x-x---x-x-x-x---x-x",
  "x-----x-x-x---x-----x-x-x-----x-x---x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-x",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c,1,r)
      }
      else if(cols[c] == "p"){
        new Plant(c,1,r);
      }
  }
}

})