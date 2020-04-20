// Rocket power prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        // passes into parent phaser.gameobjects
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // adding an object to existing scene, displayList, updateList
        this.isFiring = false; // tracking rockets fire status

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
        

    }

    update() {
        // left/right movement code every frame
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 47 ) {
                this.x -= 2;
            } else if(keyRIGHT.isDown && this.x <= 578) {
                this.x += 2;
            }
        }

        // pew pew button (NOT spacebar)
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }    

        // if fired, move up
        if(this.isFiring && this.y >= 108) {
            this.y -= 2;
           //curve shot but cannot move freely this.x += 3;
        }

        // resets on miss
        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
    
    // reset rocket to "ground level"
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}