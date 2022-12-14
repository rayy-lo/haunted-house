import EventEmitter from "./EventEmitter";
export class Sizes extends EventEmitter {
  private width: number;
  private height: number;
  private pixelRatio: number;

  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.emit("resize");
    });
  }
}
