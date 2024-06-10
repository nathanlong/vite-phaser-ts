import "./style.css";

import Phaser from "phaser";
import Game from "./scenes/game";

// game configuration object
const config: Phaser.Types.Core.GameConfig = {
  width: 960,
  height: 540,
  type: Phaser.AUTO,
  backgroundColor: 0x140b40,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Game],
  parent: "app",
  pixelArt: false,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {
        y: 0,
        x: 0,
      },
    },
  },
};

// the game itself
new Phaser.Game(config);
