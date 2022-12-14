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
    this.scene = this.world.scene;
    this.camera = this.world.camera;
    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
  }
}
