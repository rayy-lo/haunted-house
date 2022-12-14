import WorldScene from "./components/Scene";
import { Sizes } from "./Utils/Sizes";
import { WorldCamera } from "./components/Camera";
import Renderer from "./components/Renderer";

export default class World {
  private canvas: HTMLCanvasElement;
  private camera: WorldCamera;
  private scene: WorldScene;
  private sizes: Sizes;
  private renderer: Renderer;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // Setup
    this.scene = new WorldScene();
    this.sizes = new Sizes();
    this.camera = new WorldCamera(this.sizes, this.canvas, this.scene);
    this.renderer = new Renderer(
      this.sizes,
      this.canvas,
      this.scene,
      this.camera
    );

    this.sizes.on("resize", this.handleResize.bind(this));
  }

  handleResize() {
    this.camera.resize();
  }
}
