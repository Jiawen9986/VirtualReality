class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = y;
        this.da = 0.15;

        this.obj = document.createElement("a-entity");
        let head = document.createElement("a-cone");
        head.setAttribute("radius-top","0");
        head.setAttribute("radius-bottom", "0.5");
        head.setAttribute("height", "1");
        head.setAttribute("color", "white");
        head.setAttribute("position", "0 0 -2");
        this.obj.append(head);
       
        let body = document.createElement("a-cylinder");
        body.setAttribute("radius","0.5");
        body.setAttribute("height","2.5");
        body.setAttribute("color","lightgray");
        body.setAttribute("position","0 -1.75 -2");
        this.obj.append(body);

        let body2 = document.createElement("a-cylinder");
        body2.setAttribute("radius","0.25");
        body2.setAttribute("height","2");
        body2.setAttribute("color","lightgray");
        body2.setAttribute("position","-0.7 -1.7 -2");
        this.obj.append(body2); 
       
        let body3 = document.createElement("a-cylinder");
        body3.setAttribute("radius","0.25");
        body3.setAttribute("height","2");
        body3.setAttribute("color","lightgray");
        body3.setAttribute("position","0.7 -1.7 -2");
        this.obj.append(body3);    


        let flare = document.createElement("a-cone");
        flare.setAttribute("rotation", "180 0 0");
        flare.setAttribute("radius-bottom", "0.5");
        flare.setAttribute("radius-top", "0");
        flare.setAttribute("height", "2");
        flare.setAttribute("color", "red");
        flare.setAttribute("opacity", "0.6");
        flare.setAttribute("position", "0 -3.95 -2");
        this.obj.append(flare);

        let flare2 = document.createElement("a-cone");
        flare2.setAttribute("rotation", "180 0 0");
        flare2.setAttribute("radius-bottom", "0.23");
        flare2.setAttribute("radius-top", "0");
        flare2.setAttribute("height", "1.2");
        flare2.setAttribute("color", "red");
        flare2.setAttribute("opacity", "0.6");
        flare2.setAttribute("position", "-0.7 -3.25 -2");
        this.obj.append(flare2);

        let flare3 = document.createElement("a-cone");
        flare3.setAttribute("rotation", "180 0 0");
        flare3.setAttribute("radius-bottom", "0.23");
        flare3.setAttribute("radius-top", "0");
        flare3.setAttribute("height", "1.2");
        flare3.setAttribute("color", "red");
        flare3.setAttribute("opacity", "0.6");
        flare3.setAttribute("position", "0.7 -3.25 -2");
        this.obj.append(flare3);
   
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append( this.obj )
    }


        ascend(){
            this.a += this.da;
            this.obj.setAttribute("position", {x:this.x, y:this.a, z:this.z});
        }


}
