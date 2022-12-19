import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Group,
  ConeGeometry,
  PlaneGeometry,
  SphereGeometry,
  PointLight,
  Float32BufferAttribute,
} from "three";
import World from "../../World";

export default class House {
  private world;
  private house;

  constructor() {
    this.world = World.getInstance();
    this.house = new Group();

    // Walls
    const {
      brickColorTexture,
      brickAoTexture,
      brickNormalTexture,
      brickRoughnessTexture,
    } = this.world.loader.items;
    const cubeGeometry = new BoxGeometry(4, 2, 4);
    const cubeMaterial = new MeshStandardMaterial({
      map: brickColorTexture,
      aoMap: brickAoTexture,
      normalMap: brickNormalTexture,
      roughnessMap: brickRoughnessTexture,
    });
    const cube = new Mesh(cubeGeometry, cubeMaterial);
    this.house.add(cube);

    cube.geometry.setAttribute(
      "uv2",
      new Float32BufferAttribute(cube.geometry.attributes.uv.array, 2)
    );

    cube.castShadow = true;

    // Roof
    const coneGeometry = new ConeGeometry(3.5, 2, 4);
    const coneMaterial = new MeshStandardMaterial({ color: "#b35f45" });
    const roof = new Mesh(coneGeometry, coneMaterial);
    roof.position.set(0, 2, 0);
    roof.rotation.y = Math.PI / 4;
    this.house.add(roof);

    // Door
    const {
      doorColorTexture,
      doorAlphaTexture,
      doorAoTexture,
      doorHeightTexture,
      doorMetalTexture,
      doorRoughTexture,
      doorNormalTexture,
    } = this.world.loader.items;
    const planeGeometry = new PlaneGeometry(2, 2, 100, 100);
    const planeMaterial = new MeshStandardMaterial({
      map: doorColorTexture,
      alphaMap: doorAlphaTexture,
      transparent: true,
      aoMap: doorAoTexture,
      metalnessMap: doorMetalTexture,
      roughnessMap: doorRoughTexture,
      normalMap: doorNormalTexture,
      displacementMap: doorHeightTexture,
      displacementScale: 0.1,
    });
    const door = new Mesh(planeGeometry, planeMaterial);
    door.position.set(0, 0, 2.01);
    this.house.add(door);

    door.geometry.setAttribute(
      "uv2",
      new Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
    );

    //Bushes
    const sphereGeometry = new SphereGeometry(0.5);
    const sphereMaterial = new MeshStandardMaterial({ color: "#89c854" });
    const bush = new Mesh(sphereGeometry, sphereMaterial);
    bush.position.set(0.75, -0.75, 2);
    bush.castShadow = true;
    this.house.add(bush);

    const bush2 = new Mesh(sphereGeometry, sphereMaterial);
    bush2.scale.set(0.5, 0.5, 0.5);
    bush2.position.set(1.25, -1, 2);
    bush2.castShadow = true;
    this.house.add(bush2);

    //Doorlight
    const doorLight = new PointLight("#ff7d46", 1, 7);
    doorLight.position.set(0, 1, 2.5);
    this.house.add(doorLight);
    doorLight.castShadow = true;

    this.world.scene.add(this.house);
  }
}
