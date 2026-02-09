let maze = [
  "tt-tttttttttttttttttttttttttttttttttttt",
  "tx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxt",
  "tx-p-----------x-xhx-------x---x-----xt",
  "tx-x-xxxxxxxxx-x-x-xpxxxxx-x-x-x-xpx-xt",
  "tx-x-------x-x-x-x-------x---x-x-x-x-xt",
  "tx-xxxxxpx-x-x-x-xxxxxxxxxxxxxpx-x-x-xt",
  "tx-----x-x-x-x-x---x-------------x-x-xt",
  "txxxxx-x-x-x-x-xxx-x-xxxxxpxxxxxxx-x-xt",
  "tx-----x-x-x---x---x-x---x-xhx-----x-xt",
  "tx-xxxxxxxpxxxxx-xxx-x-x-x-x-x-xxxxx-xt",
  "tx---x-x-------x-x---x-x-x-x-x-x-----xt",
  "txxx-x-x-xxxxx-x-x-xxx-x-x-x-x-x-xxxxxt",
  "tx-p-x-x-x---x-x-x-x-x-x-x-x---x-----xt",
  "tx-x-x---x-x-x-x-x-x---x-x-xxxxxxxxx-xt",
  "tx-x-xxxxx-x-x-x-x-xxxxx-x-x---x--hx-xt",
  "tx-x-------x-x---x-x-----x-x---xpxxx-xt",
  "tx-xxxxxxxxx-xxxxx-x-xxxxx-x-x-x-----xt",
  "tx-x---x---x-------x---x---x-x-xxxxxpxt",
  "tx-x-x-xxx-xxxxxxxxxxx-x-xxx-x-x---x-xt",
  "tx---x-----x---x-----x-x-x---x-x-x-x-xt",
  "txxxxxxxxxxx-x-xpxxx-x-x-xxxxx-x-x-xxxt",
  "tx---x-------x-p-p-x---x-x-----x-x---xt",
  "tx-x-x-xxxxxxxxxpxxxxxxx-x-xxxxx-xxx-xt",
  "tx-x-x-x-------xhx-------x---x---x---xt",
  "tx-x---x-xxxxx-xxx-xxxxxxxxx-x-xxx-xxxt",
  "tx-xxxxx-x---x-x---x---x-----x-x---x-xt",
  "tx-----x-x-x-x-x-xxx-x-x-x-xxx-x-xxx-xt",
  "txxxxx-x-x-x-x---x---x---x-x-p-x-----xt",
  "tx---x-x-x-xxxxxxx-x-xxxxxxx-x-xxxxx-xt",
  "tx-x-x-x-x---------x-x-------x-----x-xt",
  "tx-x---x-xxxpxxxxxxxxx-xxxxxxxxxpxxx-xt",
  "tx-x-xxx-----------x---x---x-----x---xt",
  "tx-x-x-p-xpxxxxxxxpx-xxx-x-x-xxxxxgxxxt",
  "tx-xxx-x-x-------x-x-x---x-x-x-x---x-xt",
  "tx-----x-x-x---x-----xhx-x-----x-x---xt",
  "txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxext",
  "ttttttttttttttttttttttttttttttttttttttt",
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
      else if(cols[c] == "h"){
        new Heart(c,1,r);
      }
      else if(cols[c] == "t"){
        new Tree(c,1,r);
      }
      else if(cols[c] == "e"){
        new Golden(c,1,r);
      }
      else if(cols[c] == "g"){
        new Glass(c,1,r);
      }
  }
}

})