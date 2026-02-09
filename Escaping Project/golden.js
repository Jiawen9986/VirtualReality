function Golden(x, y, z) {
  this.obj = document.createElement("a-box"); // 必须是 this.obj
  this.obj.setAttribute("position", {x: x, y: y, z: z});
  this.obj.setAttribute("color", "gold");
  scene.appendChild(this.obj);
}