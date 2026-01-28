let maze = [
  "x-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x-p-----------x-x-x-------x---x-----x",
  "x-x-xxxxxxxxx-x-x-xpxxxxx-x-x-x-xpx-x",
  "x-x-------x-x-x-x-------x---x-x-x-x-x",
  "x-xxxxxpx-x-x-x-xxxxxxxxxxxxxpx-x-x-x",
  "x-----x-x-x-x-x---x-------------x-x-x",
  "xxxxx-x-x-x-x-xxx-x-xxxxxpxxxxxxx-x-x",
  "x-----x-x-x---x---x-x---x-x-x-----x-x",
  "x-xxxxxxxpxxxxx-xxx-x-x-x-x-x-xxxxx-x",
  "x---x-x-------x-x---x-x-x-x-x-x-----x",
  "xxx-x-x-xxxxx-x-x-xxx-x-x-x-x-x-xxxxx",
  "x-p-x-x-x---x-x-x-x-x-x-x-x---x-----x",
  "x-x-x---x-x-x-x-x-x---x-x-xxxxxxxxx-x",
  "x-x-xxxxx-x-x-x-x-xxxxx-x-x---x---x-x",
  "x-x-------x-x---x-x-----x-x---xpxxx-x",
  "x-xxxxxxxxx-xxxxx-x-xxxxx-x-x-x-----x",
  "x-x---x---x-------x---x---x-x-xxxxxpx",
  "x-x-x-xxx-xxxxxxxxxxx-x-xxx-x-x---x-x",
  "x---x-----x---x-----x-x-x---x-x-x-x-x",
  "xxxxxxxxxxx-x-xpxxx-x-x-xxxxx-x-x-xxx",
  "x---x-------x-p-p-x---x-x-----x-x---x",
  "x-x-x-xxxxxxxxxpxxxxxxx-x-xxxxx-xxx-x",
  "x-x-x-x-------x-x-------x---x---x---x",
  "x-x---x-xxxxx-xxx-xxxxxxxxx-x-xxx-xxx",
  "x-xxxxx-x---x-x---x---x-----x-x---x-x",
  "x-----x-x-x-x-x-xxx-x-x-x-xxx-x-xxx-x",
  "xxxxx-x-x-x-x---x---x---x-x-p-x-----x",
  "x---x-x-x-xxxxxxx-x-xxxxxxx-x-xxxxx-x",
  "x-x-x-x-x---------x-x-------x-----x-x",
  "x-x---x-xxxpxxxxxxxxx-xxxxxxxxxpxxx-x",
  "x-x-xxx-----------x---x---x-----x---x",
  "x-x-x-p-xpxxxxxxxpx-xxx-x-x-xxxxx-xxx",
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