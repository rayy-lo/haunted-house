import { Clock } from "three";
import EventEmitter from "./EventEmitter";

export default class Loop extends EventEmitter {
  clock: Clock;

  constructor() {
    super();
    this.clock = new Clock();
    this.clock.start();

    window.requestAnimationFrame(this.tick.bind(this));
  }

  tick(timestamp) {
    this.emit("tick", { timestamp });
    window.requestAnimationFrame(this.tick.bind(this));
  }
}
