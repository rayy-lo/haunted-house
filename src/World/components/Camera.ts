import { PerspectiveCamera } from "three";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

export class WorldCamera {
  private camera: PerspectiveCamera;
  private controls: OrbitControls;
  private sizes;
  private canvas;
  private scene;

  constructor(sizes, canvas, scene) {
    this.sizes = sizes;
    this.canvas = canvas;
    this.scene = scene;

    this.setInstance();
    this.setOrbitControls();
  }

  update() {}

  setInstance() {
    this.camera = new PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height
    );
    this.camera.position.set(0, 0, 10);
    this.scene.add(this.camera);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }
}
