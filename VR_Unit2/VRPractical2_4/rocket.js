class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = y;
        this.da = 0.01;


        this.obj = document.createElement("a-entity");
        let head = document.createElement("a-cone");
        head.setAttribute("radius-top","0");
        head.setAttribute("radius-bottom", "0.5");
        head.setAttribute("height", "1");
        head.setAttribute("color", "teel");
        head.setAttribute("position", "0 0 -2");
        this.obj.append(head);
       
        let body = document.createElement("a-cylinder");
        body.setAttribute("radius","0.5");
        body.setAttribute("height","2");
        body.setAttribute("color","gray");
        body.setAttribute("position","0 -1.5 -2");
        this.obj.append(body);


        let flare = document.createElement("a-cone");
        flare.setAttribute("position", `0 -3.5 -2`);
        flare.setAttribute("rotation", "180 0 0");
        flare.setAttribute("radius-bottom", "0.5");
        flare.setAttribute("radius-top", "0.25");
        flare.setAttribute("height", "2");
        flare.setAttribute("color", "orange");
        flare.setAttribute("opacity", "0.6");
        this.obj.append(flare);


   
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append( this.obj )
    }


        ascend(){
            this.a += this.da;
            this.obj.setAttribute("position", {x:this.x, y:this.a, z:this.z});
        }


}
