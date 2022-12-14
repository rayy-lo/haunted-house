import WorldScene from "./components/Scene";
import { Sizes } from "./Utils/Sizes";
import { WorldCamera } from "./components/Camera";
import Renderer from "./components/Renderer";
import Loop from "./Utils/Loop";
export default class World {
  public static instance: World;

  canvas: HTMLCanvasElement;
  camera: WorldCamera;
  scene: WorldScene;
  sizes: Sizes;
  renderer: Renderer;
  loop: Loop;

  constructor(canvas: HTMLCanvasElement) {
    World.instance = this;

    this.canvas = canvas;

    // Setup
    this.scene = new WorldScene();
    this.sizes = new Sizes();
    this.camera = new WorldCamera();
    this.renderer = new Renderer();
    this.loop = new Loop();

    this.sizes.on("resize", this.handleResize.bind(this));
    this.loop.on("tick", this.handleUpdate.bind(this));
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

  handleUpdate() {

  }
}
