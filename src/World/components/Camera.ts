import { PerspectiveCamera } from "three";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import World from "../World";

export class WorldCamera {
  private camera: PerspectiveCamera;
  private controls: OrbitControls;
  private sizes;
  private canvas;
  private scene;
  private world;

  constructor() {
    this.world = World.getInstance();
    this.sizes = this.world.sizes;
    this.canvas = this.world.canvas;
    this.scene = this.world.scene;
    this.camera = new PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height
    );

    this.setInstance();
    this.setOrbitControls();
  }

  update() {}

  setInstance() {
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
