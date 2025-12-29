class Box{
 constructor(x,y,z){
   this.obj = document.createElement("a-box");
   /* Challenge
      Associate the fireball sound with the box and 
      enable it to play forever
   */
    this.boom = false;
    this.obj.setAttribute("sound","src: #fireball; loop: true;");

   /* Challenge
      Add an event listener that sets boom to true and
      plays the fireball sound effect
   */
    this.obj.setAttribute("color","orange");
    this.obj.setAttribute("depth","1");
    this.obj.setAttribute("height","1");
    this.obj.setAttribute("width","1");
    this.obj.addEventListener("click", ()=>{
      this.boom = true;
      this.obj.components.sound.playSound();
    });

   this.obj.setAttribute("position",{x:x,y:y,z:z});
   scene.append(this.obj);
 } 
 blast(){
   if(this.boom){
     this.obj.object3D.position.y += 0.02;
   }
 }
}