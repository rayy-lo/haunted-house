import { Camera, PerspectiveCamera } from "three";

export class MyCamera extends Camera {
  // Custom properties and methods here
  private camera: Camera;

  constructor() {
    super();
    this.camera = new PerspectiveCamera();
    // Initialize the camera here
  }

  update() {
    // Update the camera here
  }
}
