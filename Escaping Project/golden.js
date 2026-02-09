class Golden {
 constructor(x,y,z){
   this.x = x;
   this.y = y;
   this.z = z;


   this.obj = document.createElement("a-box");
   this.obj.setAttribute("src","golden.webp");
   this.obj.setAttribute("position",{x:x,y:0.1,z:z});
   this.obj.setAttribute("height","0.05");




   scene.append(this.obj);


 }
}
