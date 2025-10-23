class House {
    constructor(x, y, z) {
        let house = document.createElement("a-entity");
        this.house = house;

        let base = document.createElement("a-box");
        base.setAttribute("color","white");
        base.setAttribute("position","0 1 0");
        base.setAttribute("width","2");
        base.setAttribute("height","1.5");
        base.setAttribute("depth","1.5");
        house.append( base );

        let roof = document.createElement("a-cylinder");
        roof.setAttribute("color","red");
        roof.setAttribute("position","0 2.5 0");
        roof.setAttribute("radius","1.5");
        roof.setAttribute("height","1.5");
        roof.setAttribute("rotation","-90 0 0");
        roof.setAttribute("segments-radial","3");
        house.append( roof );

        house.setAttribute("position",{x:x, y:y, z:z});
        scene.append( house )
    }
}