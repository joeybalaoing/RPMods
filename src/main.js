
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, MenuMulti, Play ]
}

let game = new Phaser.Game(config);
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000,
    multiplay: 0
}

//reserve keyboard variables
let keyF, keyLEFT, keyRIGHT, keyS, keyN, keyM, keyUP, keyDOWN;