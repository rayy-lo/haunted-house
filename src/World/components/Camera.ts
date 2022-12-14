import { PerspectiveCamera } from "three";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import World from "../World";

export default class WorldCamera {
  camera: PerspectiveCamera;
  controls: OrbitControls;
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
      45,
      this.sizes.width / this.sizes.height
    );

    this.setInstance();
    this.setOrbitControls();
  }

  update() {
    this.controls.update();
  }

  setInstance() {
    this.camera.position.set(6, 5, 14);
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
