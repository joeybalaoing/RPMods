// Rocket power prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        // passes into parent phaser.gameobjects
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // adding an object to existing scene, displayList, updateList
        this.points = pointValue;


    }

    update() {
        // move spaceship left
        this.x -= game.settings.spaceshipSpeed;

        // wraparound screen bounds
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
    // reset
    reset() {
        this.x = game.config.width;
    }
}