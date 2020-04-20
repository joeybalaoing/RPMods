// mods
//2 player mode 50 
//Implement a new timing/scoring mechanism that adds time to the clock for successful hits 25
//Display the time remaining (in seconds) on the screen 15
//Allow the player to control the Rocket after it's fired 10
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