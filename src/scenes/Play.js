class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images and tile sprite
        this.load.image('rocket', './assets/rocket.png');   
        this.load.image('spaceship', './assets/spaceship.png'); 
        this.load.image('starfield', './assets/starfield.png'); 
     }

    create() {
        // test  this.add.text(20, 20, "Rocket Patrol Play");
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // white rectangle borders (rectangle is object) 
        // contrl + d selects all colors
        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);

        // green UI background
        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);

        // add rocket (ready) player1
        // constuctor(scene, x, y, texture, frame)
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket')
        .setScale(0.5, 0.5).setOrigin(0, 0);

        //add spaceship (x3)
        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 196, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width + 192, 260, 'spaceship', 0, 10).setOrigin(0,0);

        // define keyboard keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update() {
        // scroll starfields
        this.starfield.tilePositionX -= 4;   // paired with above makes diagonal  this.starfield.tilePositionX -= 4;

        // update rocket movement
        this.p1Rocket.update();

        //update spaceship
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();


    }
}