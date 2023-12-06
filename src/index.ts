import "./style.css";

import Phaser from "phaser";
import { Game } from "./scene/game";

// object to initialize the Scale Manager
const scaleObject: Phaser.Types.Core.ScaleConfig = {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: "app",
  width: 960,
  height: 540,
};

// game configuration object
const configObject: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: 0x140b40,
  scale: scaleObject,
  scene: [Game],
  pixelArt: false,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {
        y: 0,
      },
    },
  },
};

// the game itself
new Phaser.Game(configObject);
