export default class Game extends Phaser.Scene {
  score: number
  debugText1: Phaser.GameObjects.Text;
  debugText2: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "Game",
    });
    this.score = 0
  }

  // preload assets
  preload(): void {
    // we can pass values to the registry to access in other scenes
    this.registry.set("score", "0");
  }

  // initialize the game
  create(): void {
    this.debugText1 = this.add.text(10, 10, "", {
      fontFamily: "Monaco, monospace",
      fontSize: "12px",
    });

    this.debugText2 = this.add.text(10, 30, "", {
      fontFamily: "Monaco, monospace",
      fontSize: "12px",
    });
  }

  // game loop
  update(time: number, delta: number): void {
    this.debugText1.setText(`Time: ${time}`);
    this.debugText2.setText(`Delta: ${delta.toFixed(3)}`);
  }
}
