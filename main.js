//Enter this in the console to make a standard worker creep.
//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

//Enter this in the consoel to maek an upgrader creep.
//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1' );
//How to assign a role to the upgrader.
//Game.creeps['Harvester1'].memory.role = 'harvester';
//Game.creeps['Upgrader1'].memory.role = 'upgrader';

//Aquires necessary functions.
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

//Main programs executable loop.
module.exports.loop = function () {
    //Goes through each loop of the program and then asks what the creeps name
    //is to do the right function.
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}
