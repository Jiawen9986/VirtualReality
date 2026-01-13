let maze = [
  "xxxxxxxxxxxxxxxxxxxxxx",
  "-------xpppppppppx-xpx",
  "xxxxxx-xpppppppppx-xpx",
  "xppppx-xxxxxxxxxxx-xxx",
  "xxxxxx-----x---------x",
  "x----xxxxx-x-xxxxxxxxx",
  "xxxx-xpppx-x-xpppppppx",
  "xppx-xxxxx-x-xxxxxxxxx",
  "xxxx-------x---x-----x",
  "x-xx-x-xxx-xxx-x-xxx-x",
  "x----x-xpx-------xpx-x",
  "xxxxxxxxxxxxxxxxxxxx-x",
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