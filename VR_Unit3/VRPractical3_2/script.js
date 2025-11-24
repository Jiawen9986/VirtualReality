let scene, car, rocket;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  car = document.getElementById("car1");
  car.x = 5;
  car.dx = -0.1;
  car.move = false;
  car.addEventListener("click",function(){
    car.move = true;
  });

  rocket = document.getElementById("rocket");
  rocket.y = 3
  rocket.dy = 0.03;
  rocket.fly= false;
  rocket.addEventListener("mouseenter",function(){
    rocket.fly = true;
  });
      
  loop();
});

function loop(){
  if(car.move){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x, y:0.2, z:-2});
  };
  if(rocket.fly){
    rocket.y += rocket.dy;
    rocket.setAttribute("position",{x:0, y:rocket.y, z:-2});
  };
  window.requestAnimationFrame(loop);
};