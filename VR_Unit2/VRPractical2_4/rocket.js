class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let top = document.createElement("a-cone");
    top.setAttribute("color","red");
    top.setAttribute("position","0 3 0");
    top.setAttribute("height","2");
    this.obj.append( top );
  
    let bottom = document.createElement("a-cylinder");
    bottom.setAttribute("position","0 0.5 0");
    bottom.setAttribute("color","white");
    bottom.setAttribute("radius","1");
    bottom.setAttribute("height","3");
    this.obj.append( bottom );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }


  launch(){
    this.x += this.dx
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}