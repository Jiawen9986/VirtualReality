class Ufo{
    constructor(x,y,z,da){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = y;
        this.da = da;


        this.obj = document.createElement("a-entity");


        let head = document.createElement("a-sphere");
        head.setAttribute("radius", "2")
        head.setAttribute("color", "green");
        head.setAttribute("position", "0 0 -2");
        head.setAttribute("opacity", "0.4");
        this.obj.append(head);
       
        let body = document.createElement("a-sphere");
        body.setAttribute("radius","3");
        body.setAttribute("color","gray");
        body.setAttribute("position","0 -1.5 -2");
        body.setAttribute("scale", "2 0.5 2");
        this.obj.append(body);


   
         this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append( this.obj )
  }


    invade(){
        this.a -= this.da;
        this.obj.setAttribute("position", {x:this.x, y:this.a, z:this.z});
    }


}