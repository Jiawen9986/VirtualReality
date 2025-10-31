class Ufo{
    constructor(x,y,z,da){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = y;
        this.da = da;

        this.obj = document.createElement("a-entity");

        let head = document.createElement("a-sphere");
        head.setAttribute("radius", "1.2")
        head.setAttribute("color", "white");
        head.setAttribute("position", "0 0 -2");
        head.setAttribute("opacity", "0.5");
        this.obj.append(head);
       
        let body = document.createElement("a-sphere");
        body.setAttribute("radius","3");
        body.setAttribute("color","gray");
        body.setAttribute("position","0 -0.55 -2");
        body.setAttribute("scale", "1.25 0.25 1.25");
        this.obj.append(body);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("radius-top","0.5");
        bottom.setAttribute("radius-bottom", "2");
        bottom.setAttribute("height", "6");
        bottom.setAttribute("color", "yellow");
        bottom.setAttribute("position", "0 -4.25 -2");
        bottom.setAttribute("opacity", "0.4");
        this.obj.append(bottom);

        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append( this.obj )
  }

    invade(){
        this.a -= this.da;
        this.obj.setAttribute("position", {x:this.x, y:this.a, z:this.z});
    }
}