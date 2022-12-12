import { Sizes, SizesI } from "./Utils/Sizes";

export default class World {
  canvas: HTMLCanvasElement;
  sizes: SizesI;

  constructor(canvas) {
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
  }
}
