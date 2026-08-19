import Experience from "../Experience.js";
import * as THREE from "three";
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Fox from "./Fox.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      // this.floor = new Floor();
      // this.fox = new Fox();
      this.environment = new Environment();

      // New test scene
      this.burgerScene = this.resources.items["world-burger-baked"].scene;
      this.scene.add(this.burgerScene);

      console.log("burger scene:", this.burgerScene);
      console.log("scene children:", this.scene.children);
    });
  }

  update() {
    // if (this.fox) this.fox.update();
  }
}
