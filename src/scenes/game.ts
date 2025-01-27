import { Scene } from "phaser";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msgText: Phaser.GameObjects.Text;
  debugText1: Phaser.GameObjects.Text;
  debugText2: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  // initialize the game
  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, "background");
    this.background.setAlpha(0.5);

    this.msgText = this.add.text(
      512,
      384,
      "Main Game Loop",
      {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      },
    );
    this.msgText.setOrigin(0.5);

    this.debugText1 = this.add.text(10, 10, "", {
      fontFamily: "Monaco, monospace",
      fontSize: "12px",
    });

    this.debugText2 = this.add.text(10, 30, "", {
      fontFamily: "Monaco, monospace",
      fontSize: "12px",
    });

    // advance scene
    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  // game loop
  update(time: number, delta: number) {
    this.debugText1.setText(`Time: ${time}`);
    this.debugText2.setText(`Delta: ${delta.toFixed(3)}`);
  }
}
