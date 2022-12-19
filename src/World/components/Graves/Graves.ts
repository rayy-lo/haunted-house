import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from "three";
import World from "../../World";

export default class Graves {
  world: World;
  constructor() {
    this.world = World.getInstance();

    const graves = new Group();
    const cube = new BoxGeometry(0.75, 1, 0.35);
    const material = new MeshStandardMaterial({ color: "#b2b6b1" });

    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 4;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const grave = new Mesh(cube, material);
      grave.position.set(x, -0.75, z);
      grave.castShadow = true;

      grave.rotation.z = (Math.random() - 0.5) * 0.4;
      grave.rotation.y = (Math.random() - 0.5) * 0.4;

      graves.add(grave);
    }

    this.world.scene.add(graves);
  }
}
