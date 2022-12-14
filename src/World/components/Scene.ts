import { Scene } from "three";

export default class WorldScene {
  // Define a property to store the objects in the scene
  objects: Array<any>;
  scene: Scene;

  constructor() {
    // Initialize the objects property
    this.objects = [];
    this.scene = new Scene();
  }

  add(object: any) {
    // Add the object to the scene
    this.objects.push(object);
    this.scene.add(object);
  }

  update() {
    // Update the positions and rotations of the objects in the scene
  }

  render() {}
}
