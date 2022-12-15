import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Group,
  ConeGeometry,
  PlaneGeometry,
  SphereGeometry,
  PointLight,
} from "three";
import World from "../../World";

export default class House {
  private world;
  private house;

  constructor() {
    this.world = World.getInstance();
    this.house = new Group();

    // Walls
    const cubeGeometry = new BoxGeometry(4, 2, 4);
    const cubeMaterial = new MeshStandardMaterial({
      color: "#ac8e82",
    });
    const cube = new Mesh(cubeGeometry, cubeMaterial);
    this.house.add(cube);

    // Roof
    const coneGeometry = new ConeGeometry(3.5, 2, 4);
    const coneMaterial = new MeshStandardMaterial({ color: "#b35f45" });
    const roof = new Mesh(coneGeometry, coneMaterial);
    roof.position.set(0, 2, 0);
    roof.rotation.y = Math.PI / 4;
    this.house.add(roof);

    // Door
    const planeGeometry = new PlaneGeometry(2, 1.5);
    const planeMaterial = new MeshStandardMaterial({ color: "#b35f45" });
    const door = new Mesh(planeGeometry, planeMaterial);
    door.position.set(0, -0.25, 2.01);
    this.house.add(door);

    //Bushes
    const sphereGeometry = new SphereGeometry(0.5);
    const sphereMaterial = new MeshStandardMaterial({ color: "#89c854" });
    const bush = new Mesh(sphereGeometry, sphereMaterial);
    bush.position.set(0.75, -0.75, 2);

    this.house.add(bush);

    const bush2 = new Mesh(sphereGeometry, sphereMaterial);
    bush2.scale.set(0.5, 0.5, 0.5);
    bush2.position.set(1.25, -1, 2);
    this.house.add(bush2);

    //Doorlight
    const doorLight = new PointLight("#ff7d46", 1);
    doorLight.position.set(0, 1, 2.5);
    this.house.add(doorLight);

    this.world.scene.add(this.house);
  }
}
