import { Scene } from "three";

export default class WorldScene extends Scene {
  // Define a property to store the objects in the scene
  objects: Array<any>;

  constructor() {
    super();
    // Initialize the objects property
    this.objects = [];
  }

  addUpdatableObject(object: any) {
    // Add the object to the scene
    this.objects.push(object);
  }

  update() {
    // Update the positions and rotations of the objects in the scene
  }

  render() {}
}
