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
    this.ghost1.castShadow = true;
    this.world.scene.add(this.ghost1);

    this.ghost2 = new PointLight("#00ffff", 2, 3);
    this.ghost2.castShadow = true;
    this.world.scene.add(this.ghost2);

    this.ghost3 = new PointLight("#ffff00", 2, 3);
    this.ghost3.castShadow = true;
    this.world.scene.add(this.ghost3);
  }

  update(timestamp) {
    const elapsedTime = timestamp / 1000;
    // Ghosts
    const ghost1Angle = elapsedTime * 0.5;
    this.ghost1.position.x = Math.cos(ghost1Angle) * 4;
    this.ghost1.position.z = Math.sin(ghost1Angle) * 4;
    this.ghost1.position.y = Math.sin(elapsedTime * 3);

    const ghost2Angle = -elapsedTime * 0.32;
    this.ghost2.position.x = Math.cos(ghost2Angle) * 5;
    this.ghost2.position.z = Math.sin(ghost2Angle) * 5;
    this.ghost2.position.y =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    const ghost3Angle = -elapsedTime * 0.18;
    this.ghost3.position.x =
      Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    this.ghost3.position.z =
      Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    this.ghost3.position.y =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  }
}
