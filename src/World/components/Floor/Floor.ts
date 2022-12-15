import { Mesh, MeshStandardMaterial, PlaneGeometry } from "three";
import World from "../../World";

export default class Floor {
  world: World;

  constructor() {
    this.world = World.getInstance();

    const planeGeometry = new PlaneGeometry(20, 20);
    const planeMaterial = new MeshStandardMaterial({ color: "#d0e9bb" });
    const floor = new Mesh(planeGeometry, planeMaterial);
    floor.rotation.x = Math.PI * -0.5;
    floor.position.set(0, -1, 0);

    this.world.scene.add(floor);
  }
}
