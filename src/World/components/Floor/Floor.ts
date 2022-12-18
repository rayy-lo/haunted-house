import {
  Float32BufferAttribute,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  RepeatWrapping,
} from "three";
import World from "../../World";

export default class Floor {
  world: World;

  constructor() {
    this.world = World.getInstance();

    const {
      grassAoTexture,
      grassColorTexture,
      grassNormalTexture,
      grassRoughTexture,
    } = this.world.loader.items;

    grassColorTexture.repeat.set(8, 8);
    grassAoTexture.repeat.set(8, 8);
    grassNormalTexture.repeat.set(8, 8);
    grassRoughTexture.repeat.set(8, 8);

    grassColorTexture.wrapS = RepeatWrapping;
    grassAoTexture.wrapS = RepeatWrapping;
    grassNormalTexture.wrapS = RepeatWrapping;
    grassAoTexture.wrapS = RepeatWrapping;

    grassColorTexture.wrapT = RepeatWrapping;
    grassAoTexture.wrapT = RepeatWrapping;
    grassNormalTexture.wrapT = RepeatWrapping;
    grassAoTexture.wrapT = RepeatWrapping;

    const planeGeometry = new PlaneGeometry(20, 20);
    const planeMaterial = new MeshStandardMaterial({
      aoMap: grassAoTexture,
      normalMap: grassNormalTexture,
      map: grassColorTexture,
      roughnessMap: grassRoughTexture,
    });
    const floor = new Mesh(planeGeometry, planeMaterial);
    floor.rotation.x = Math.PI * -0.5;
    floor.position.set(0, -1, 0);

    floor.geometry.setAttribute(
      "uv2",
      new Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
    );

    this.world.scene.add(floor);
  }
}
