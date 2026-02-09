class Bullet {
  constructor(scene, camera) {
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", 0.12);
    this.obj.setAttribute("color", "#222");

    const p = camera.object3D.position;
    this.obj.object3D.position.set(p.x, p.y, p.z);
    scene.append(this.obj);

    const theta = camera.object3D.rotation.y + Math.PI;
    const phi = camera.object3D.rotation.x;

    const speed = 0.35;
    const v_xz = speed * Math.cos(phi);

    this.dx = v_xz * Math.sin(theta);
    this.dz = v_xz * Math.cos(theta);
    this.dy = speed * Math.sin(phi);

    this.life = 0;
  }

  step() {
    this.obj.object3D.position.x += this.dx;
    this.obj.object3D.position.y += this.dy;
    this.obj.object3D.position.z += this.dz;
    this.life++;
  }
}