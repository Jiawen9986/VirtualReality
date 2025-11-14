let maze = [
  "xxxxxxxxxxxxxxxxxxxxxx",
  "x---------------------",
  "x--------------------x",
  "x--------------------x",
  "xTTTT----------------x",
  "x--------------------x",
  "x--------------------x",
  "x--TT------TT--------x",
  "x--TT--TT------------x",
  "xTTTT--TT------------x",
  "-------TTTTTT--TTT--Tx",
  "xxxxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})