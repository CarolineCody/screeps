//Enter this in the console to make a standard worker creep.
//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

//Enter this in the consoel to maek an upgrader creep.
//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1' );
//How to assign a role to the upgrader.
//Game.creeps['Harvester1'].memory.role = 'harvester';
//Game.creeps['Upgrader1'].memory.role = 'upgrader';

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
