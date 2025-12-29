let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
  for(let i=0; i<10; i++){
    let x = Math.random()*20 - 10;
    let y = 0.5;
    let z = Math.random()*20 - 10;
    let box = new Box(x,y,z);
    boxes.push(box);
  }
  loop();
 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  for(let box of boxes){
    box.blast();
  }
  window.requestAnimationFrame( loop )
  
}