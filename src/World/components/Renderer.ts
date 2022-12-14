import { WebGLRenderer } from "three";

export default class Renderer {
  private sizes;
  private canvas;
  private scene;
  private camera;
  private renderer;

  constructor(sizes, canvas, scene, camera) {
    this.sizes = sizes;
    this.canvas = canvas;
    this.scene = scene;
    this.camera = camera;
    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
  }
}
