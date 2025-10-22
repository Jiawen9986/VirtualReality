
window.addEventListener("DOMContentLoaded",function() {
    const scene = document.querySelector("a-scene");
    scene.addEventListener("loaded", function() {
        
        loop()
    })
})

function loop(){
    car = document.querySelector("#car");
    car.setAttribute("position",{x:car.getAttribute("position").x+=0.1, y:0, z:-8});
    
    pokeball  = document.querySelector("#pokemonBall");
    pokeball .setAttribute("rotation",{x:pokeball.getAttribute("rotation").x+=1});
    
    rocket = document.querySelector("#rocket");
    rocket.setAttribute("position",{y:rocket.getAttribute("position").y+=0.5});

    dude = document.querySelector("#dude");
    dude.setAttribute("scale",{z:dude.getAttribute("scale").z+=0.005, x:dude.getAttribute("scale").x+=0.005, y:dude.getAttribute("scale").y+=0.005 });
    dude.setAttribute("position",{z:dude.getAttribute("position").z, x:dude.getAttribute("position").x, y:dude.getAttribute("position").y+=0.0025 });

    sun = document.querySelector("#sun");
    sun.setAttribute("position",{x:2, y:5, z:sun.getAttribute("position").z-=0.1 });

    window.requestAnimationFrame(loop);
}