class Glass {
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","glass.png");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("height","2");
    this.obj.setAttribute("material","opacity: 1; transparent: true");


    
    scene.append(this.obj);

  }
}