import WorldScene from "./components/Scene";
import { Sizes } from "./Utils/Sizes";
import { WorldCamera } from "./components/Camera";
import Renderer from "./components/Renderer";
export default class World {
  public static instance: World;

  canvas: HTMLCanvasElement;
  camera: WorldCamera;
  scene: WorldScene;
  sizes: Sizes;
  renderer: Renderer;

  constructor(canvas: HTMLCanvasElement) {
    World.instance = this;

    this.canvas = canvas;

    // Setup
    this.scene = new WorldScene();
    this.sizes = new Sizes();
    this.camera = new WorldCamera();
    this.renderer = new Renderer();

    this.sizes.on("resize", this.handleResize.bind(this));
  }

  public static getInstance() {
    if (!World.instance) {
      const canvas = document.querySelector("canvas");
      World.instance = new World(canvas!);
    }
    return World.instance;
  }

  handleResize() {
    this.camera.resize();
    this.renderer.resize();
  }
}
