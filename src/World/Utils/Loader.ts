import { TextureLoader } from "three";
import EventEmitter from "./EventEmitter";

import brickColorTexture from "../../../assets/textures/bricks/color.jpg";
import brickNormalTexture from "../../../assets/textures/bricks/normal.jpg";
import brickAoTexture from "../../../assets/textures/bricks/ambientOcclusion.jpg";
import brickRoughnessTexture from "../../../assets/textures/bricks/roughness.jpg";

import doorAlphaTexture from "../../../assets/textures/door/alpha.jpg";
import doorAoTexture from "../../../assets/textures/door/ambientOcclusion.jpg";
import doorColorTexture from "../../../assets/textures/door/color.jpg";
import doorHeightTexture from "../../../assets/textures/door/height.jpg";
import doorMetalTexture from "../../../assets/textures/door/metalness.jpg";
import doorNormalTexture from "../../../assets/textures/door/normal.jpg";
import doorRoughTexture from "../../../assets/textures/door/roughness.jpg";

import grassColorTexture from "../../../assets/textures/grass/color.jpg";
import grassAoTexture from "../../../assets/textures/grass/ambientOcclusion.jpg";
import grassNormalTexture from "../../../assets/textures/grass/normal.jpg";
import grassRoughnessTexture from "../../../assets/textures/grass/roughness.jpg";

const sources = [
  {
    name: "brickColorTexture",
    path: brickColorTexture,
  },
  {
    name: "brickNormalTexture",
    path: brickNormalTexture,
  },
  {
    name: "brickRoughnessTexture",
    path: brickRoughnessTexture,
  },
  {
    name: "brickAoTexture",
    path: brickAoTexture,
  },
  {
    name: "doorAlphaTexture",
    path: doorAlphaTexture,
  },
  {
    name: "doorColorTexture",
    path: doorColorTexture,
  },
  {
    name: "doorAoTexture",
    path: doorAoTexture,
  },
  {
    name: "doorHeightTexture",
    path: doorHeightTexture,
  },
  {
    name: "doorMetalTexture",
    path: doorMetalTexture,
  },
  {
    name: "doorNormalTexture",
    path: doorNormalTexture,
  },
  {
    name: "doorRoughTexture",
    path: doorRoughTexture,
  },
  {
    name: "grassAoTexture",
    path: grassAoTexture,
  },
  {
    name: "grassColorTexture",
    path: grassColorTexture,
  },
  {
    name: "grassNormalTexture",
    path: grassNormalTexture,
  },
  {
    name: "grassRoughTexture",
    path: grassRoughnessTexture,
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
