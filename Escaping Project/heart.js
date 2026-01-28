class Heart {
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","heart.webp");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("height","2");
    scene.append(this.obj);

  }
}