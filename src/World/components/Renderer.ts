import { WebGLRenderer } from "three";
import World from "../World";
export default class Renderer {
  private sizes;
  private canvas;
  private scene;
  private camera;
  private renderer;
  private world;

  constructor() {
    this.world = World.getInstance();
    this.sizes = this.world.sizes;
    this.canvas = this.world.canvas;
    this.scene = this.world.scene.scene;
    this.camera = this.world.camera.camera;

    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.render(this.scene, this.camera);

    this.renderer.setClearColor("#262837");
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }
}
