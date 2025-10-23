class cloudObj{
    constructor(x,y,z){
        let cloud = document.createElement("a-entity");
        this.cloud = cloud;
   
        let ball1 = document.createElement("a-sphere");
        ball1.setAttribute("color","white");
        ball1.setAttribute("position","-1 0 0");
        ball1.setAttribute("radius","1");
        cloud.append( ball1 );

        let ball2 = document.createElement("a-sphere");
        ball2.setAttribute("color","white");
        ball2.setAttribute("position","0 0 0");
        ball2.setAttribute("radius","1.25");
        cloud.append( ball2 );

        let ball3 = document.createElement("a-sphere");
        ball3.setAttribute("color","white");
        ball3.setAttribute("position","1 0 0");
        ball3.setAttribute("radius","1");
        cloud.append( ball3 );

        cloud.setAttribute("position",{x:x, y:y, z:z});
        scene.append( cloud )
    }

}