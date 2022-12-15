import { AmbientLight, DirectionalLight, PointLight } from "three";
import World from "../../World";

export default class Light {
  world: World;

  constructor() {
    this.world = World.getInstance();

    const ambientLight = new AmbientLight("#b9d5ff", 0.12);
    const moonLight = new DirectionalLight("#b9d5ff", 0.12);

    this.world.scene.add(ambientLight);
    this.world.scene.add(moonLight);
  }
}
