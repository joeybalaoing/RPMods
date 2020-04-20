let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);
//define game setttings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}

//reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT;