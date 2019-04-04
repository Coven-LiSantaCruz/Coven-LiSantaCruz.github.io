var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'sawblade', x: 500, y: groundY },
                { type: 'sawblade', x: 1000, y: groundY },
                { type: 'sawblade', x: 1500, y: groundY }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE


        function createSawBlade(x, y) {
            // your code goes here
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(25, 10);
            myObstacle.x = x
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;


        }

        console.log(levelData.gameItems)

        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
         
            // Create a sawblade using the .x and .y property of each game item object
            createSawBlade(gameItem.x, gameItem.y);
            
        }

        
        function createEnemy(x, y) {
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = 400;
        enemy.y = groundY-50;
        game.addGameItem(enemy);

        enemy.velocityX = -1;
        enemy.rotationalVelocity = 10;
        
        enemy.onPlayerCollision = function() {
            game.changeIntegrity(-50);
            enemy.fadeOut();
        };
            
        enemy.onProjectileCollision = function() {
        game.increaseScore(100);
        enemy.fadeOut();
    };
        }
    createEnemy(400,groundY-10);
    createEnemy(800,groundY-100);
    createEnemy(1200,groundY-50);

    function createReward(x, y) {
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'yellow');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = groundY-50;
        game.addGameItem(enemy);

        enemy.velocityX = -1;
        enemy.rotationalVelocity = 10;
        
        enemy.onPlayerCollision = function() {
            game.increaseScore(1000);
            enemy.fadeOut();
        };
            

    
    }

    createReward(1500, 350)
           

    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}