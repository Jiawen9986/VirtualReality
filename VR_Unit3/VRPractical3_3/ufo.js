class UFO{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.dy=0.005;
        this.z=z;

        this.s = 1;
        this.ds = -0.01;
        this.shot = false;
    

        this.obj=document.createElement("a-entity");

        let top=document.createElement("a-sphere");
        top.setAttribute("radius","3");
        top.setAttribute("position",{x:0,y:2,z:0});
        top.setAttribute("opacity","0.5");
        top.setAttribute("metalness","0.4");
        top.setAttribute("roughness","0.2");
        this.obj.append(top);


        let body=document.createElement("a-sphere");
        body.setAttribute("radius","5");
        body.setAttribute("scale",{x:1.3,y:0.3,z:1.3});
        body.setAttribute("position",{x:0,y:1.5,z:0});
        body.setAttribute("color","black");
        body.setAttribute("metalness","1");
        body.setAttribute("roughness","0.1");
        this.obj.append(body);

        let bottom=document.createElement("a-sphere");
        bottom.setAttribute("radius","4");
        bottom.setAttribute("scale",{x:1,y:0.4,z:1});
        bottom.setAttribute("metalness","0.8");
        bottom.setAttribute("position",{x:0,y:0.7,z:0});
        bottom.setAttribute("color","gray");
        bottom.setAttribute("roughness","0.3")
        this.obj.append(bottom);

        let light=document.createElement("a-cone");
        light.setAttribute("radius-bottom","2.5");
        light.setAttribute("radius-top", "0");
        light.setAttribute("height", "5");
        light.setAttribute("color","yellow");
        light.setAttribute("opacity","0.4");
        light.setAttribute("position",{x:0,y:-2.5,z:0.35});
        light.setAttribute("rotation",{x:180,y:0,z:0});
        this.obj.append(light);

    
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);


    }
     invade(){
        this.y -=this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if (this.y<=0){
            this.y = 0
        }
        

    }
    
    shrink(){
        if(this.shot && this.s>0){
            this.s += this.ds;
            this.obj.setAttribute("scale",{x:this.s,y:this.s,z:this.s});
        }
    }
}