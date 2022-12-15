import WorldScene from "./components/Scene";
import { Sizes } from "./Utils/Sizes";
import { WorldCamera } from "./components/Camera";
import Renderer from "./components/Renderer";
import Loop from "./Utils/Loop";
import House from "./components/House/House";
import Floor from "./components/Floor/Floor";
import Light from "./components/Light/Light";
import { Fog } from "three";
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

    this.setupScene();
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
    const floor = new Floor();
    const light = new Light();
    const fog = new Fog("#262837", 10, 20);
    this.scene.scene.fog = fog;
  }

  handleResize() {
    this.camera.resize();
    this.renderer.resize();
  }

  handleUpdate() {
    this.camera.update();
    this.renderer.update();
  }
}
