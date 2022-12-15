import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Group,
  ConeGeometry,
  PlaneGeometry,
  SphereGeometry,
} from "three";
import World from "../../World";

export default class House {
  private world;
  private house;

  constructor() {
    this.world = World.getInstance();
    this.house = new Group();

    const cubeGeometry = new BoxGeometry(4, 2, 4);
    const cubeMaterial = new MeshBasicMaterial({
      color: "#ac8e82",
    });
    const cube = new Mesh(cubeGeometry, cubeMaterial);
    this.house.add(cube);

    const coneGeometry = new ConeGeometry(3.5, 2, 4);
    const coneMaterial = new MeshBasicMaterial({ color: "#b35f45" });
    const roof = new Mesh(coneGeometry, coneMaterial);
    roof.position.set(0, 2, 0);
    roof.rotation.y = Math.PI / 4;
    this.house.add(roof);

    const planeGeometry = new PlaneGeometry(2, 1.5);
    const planeMaterial = new MeshBasicMaterial({ color: "#b35f45" });
    const door = new Mesh(planeGeometry, planeMaterial);
    door.position.set(0, -0.25, 2.01);
    this.house.add(door);

    const sphereGeometry = new SphereGeometry(0.5);
    const sphereMaterial = new MeshBasicMaterial({ color: "#89c854" });
    const bush = new Mesh(sphereGeometry, sphereMaterial);
    bush.position.set(1, -0.75, 2);
    this.house.add(bush);

    this.world.scene.add(this.house);
  }
}
