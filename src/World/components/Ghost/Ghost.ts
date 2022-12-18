import { PointLight } from "three";
import World from "../../World";

export default class Ghost {
  world: World;
  ghost1: PointLight;
  ghost2: PointLight;
  ghost3: PointLight;

  constructor() {
    this.world = World.getInstance();

    this.ghost1 = new PointLight("#ff00ff", 2, 3);
    this.world.scene.add(this.ghost1);

    this.ghost2 = new PointLight("#00ffff", 2, 3);
    this.world.scene.add(this.ghost2);

    this.ghost3 = new PointLight("#ffff00", 2, 3);
    this.world.scene.add(this.ghost3);
  }

  update() {
    console.log("update");
  }
}
