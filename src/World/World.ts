import WorldScene from "./components/Scene";
import Sizes from "./Utils/Sizes";
import Loader from "./Utils/Loader";
import WorldCamera from "./components/Camera";
import Renderer from "./components/Renderer";
import Loop from "./Utils/Loop";
import House from "./components/House/House";
import Floor from "./components/Floor/Floor";
import Light from "./components/Light/Light";
import Graves from "./components/Graves/Graves";
import { Fog } from "three";
import Ghost from "./components/Ghost/Ghost";
export default class World {
  public static instance: World;

  canvas: HTMLCanvasElement;
  camera: WorldCamera;
  scene: WorldScene;
  sizes: Sizes;
  renderer: Renderer;
  loop: Loop;
  loader: Loader;
  ghosts: Ghost;

  constructor(canvas: HTMLCanvasElement) {
    World.instance = this;

    this.canvas = canvas;

    // Setup
    this.scene = new WorldScene();
    this.sizes = new Sizes();
    this.camera = new WorldCamera();
    this.renderer = new Renderer();
    this.loop = new Loop();
    this.loader = new Loader();

    this.sizes.on("resize", this.handleResize.bind(this));
    this.loop.on("tick", this.handleUpdate.bind(this));
    this.loader.on("ready", () => this.setupScene());
  }

  public static getInstance() {
    if (!World.instance) {
      const canvas = document.querySelector("canvas");
      World.instance = new World(canvas!);
    }
    return World.instance;
  }

  setupScene() {
    const house = new House();
    const graves = new Graves();
    const floor = new Floor();
    const light = new Light();
    const fog = new Fog("#484c68", 5, 25);
    this.ghosts = new Ghost();
    this.scene.scene.fog = fog;
  }

  handleResize() {
    this.camera.resize();
    this.renderer.resize();
  }

  handleUpdate(e) {
    this.camera.update();
    this.renderer.update();
    this.ghosts.update(e.detail.timestamp);
  }
}
