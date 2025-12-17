class BulletBox{
    constructor(x,y,z){
        this.x = x;
        this.y=0;
        this.z = z;

        this.obj=document.createElement("a-box");
        this.obj.setAttribute("width",0.25);
        this.obj.setAttribute("depth",0.24);
        this.obj.setAttribute("height",0.4);
        this.obj.setAttribute("color", "yellow");
        this.obj.setAttribute("position",{x:x,y:y,z:z})
        scene.append(this.obj);

        ammo_boxes.push(this);
    }
    pickup(){
        if(this.obj){
            if(typeof this.obj.remove === 'function') this.obj.remove();
            else if(this.obj.parentNode) this.obj.parentNode.removeChild(this.obj);
        }
        const i = ammo_boxes.indexOf(this);
        if(i !== -1) ammo_boxes.splice(i,1);
        ammo_count += 1;
    }
}