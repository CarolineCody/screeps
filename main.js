//Enter this in the console to print something out.
//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

//Creates an object of the branch of role.harvester.
var roleHarvester = require('role.harvester');

//The programs main executable loop.
module.exports.loop = function () {
    //Searches through each creep and asks it to complete the task of the function.
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}
