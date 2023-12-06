// this class extends Scene class
export class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
    });
  }

  circle: Phaser.Geom.Circle;
  graphics: Phaser.GameObjects.Graphics;
  debugText1: Phaser.GameObjects.Text;
  debugText2: Phaser.GameObjects.Text;

  // method to be called once the instance has been created
  create(): void {
    const circle = new Phaser.Geom.Circle(480, 270, 100);
    const graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    graphics.fillCircleShape(circle);

    this.debugText1 = this.add.text(10, 10, "", {
      fontFamily: "Monaco, monospace",
      fontSize: "12px",
    });

    this.debugText2 = this.add.text(10, 30, "", {
      fontFamily: "Monaco, monospace",
      fontSize: "12px",
    });
  }

  update(time: number, delta: number): void {
    this.debugText1.setText(`Time: ${time}`);
    this.debugText2.setText(`Delta: ${delta.toFixed(3)}`);
  }
}
