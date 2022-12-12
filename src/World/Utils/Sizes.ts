import EventEmitter from "./EventEmitter";

export interface SizesI {
  width: number;
  height: number;
  pixelRatio: number;
}

export class Sizes extends EventEmitter implements SizesI {
  width: number;
  height: number;
  pixelRatio: number;

  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      console.log("resize ");
    });
  }
}
