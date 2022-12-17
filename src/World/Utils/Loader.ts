import { TextureLoader } from "three";
import EventEmitter from "./EventEmitter";

const sources = [
  {
    name: "brickColorTexture",
    path: "../../assets/textures/bricks/color.jpg",
  },
  {
    name: "brickNormalTexture",
    path: "../../assets/textures/bricks/normal.jpg",
  },
  {
    name: "brickRoughnessTexture",
    path: "../../assets/textures/bricks/roughness.jpg",
  },
  {
    name: "brickAoTexture",
    path: "../../assets/textures/bricks/ambientOcclusion.jpg",
  },
  {
    name: "doorAlphaTexture",
    path: "../../assets/textures/door/alpha.jpg",
  },
  {
    name: "doorColorTexture",
    path: "../../assets/textures/door/color.jpg",
  },
  {
    name: "doorAoTexture",
    path: "../../assets/textures/door/ambientOcclusion.jpg",
  },
  {
    name: "doorHeightTexture",
    path: "../../assets/textures/door/height.jpg",
  },
  {
    name: "doorMetalTexture",
    path: "../../assets/textures/door/metalness.jpg",
  },
  {
    name: "doorNormalTexture",
    path: "../../assets/textures/door/normal.jpg",
  },
  {
    name: "doorRoughTexture",
    path: "../../assets/textures/door/roughness.jpg",
  },
  {
    name: "grassAoTexture",
    path: "../../assets/textures/grass/ambientOcclusion.jpg",
  },
  {
    name: "grassColorTexture",
    path: "../../assets/textures/grass/color.jpg",
  },
  {
    name: "grassNormalTexture",
    path: "../../assets/textures/grass/normal.jpg",
  },
  {
    name: "grassRoughTexture",
    path: "../../assets/textures/grass/roughness.jpg",
  },
];

type Source = {
  name: string;
  path: string;
};

export default class Loader extends EventEmitter {
  sources: Source[];
  items;
  textureLoader: TextureLoader;
  loaded;
  toLoad;

  constructor() {
    super();
    this.sources = sources;

    this.textureLoader = new TextureLoader();
    this.loaded = 0;
    this.toLoad = this.sources.length;
    this.items = {};
    this.loadTextures();
  }

  textureLoaded(source, file) {
    this.loaded++;
    this.items[source.name] = file;
    if (this.loaded === this.toLoad) this.emit("ready");
  }

  loadTextures() {
    for (const source of this.sources) {
      this.textureLoader.load(source.path, (file) =>
        this.textureLoaded(source, file)
      );
    }
  }
}
