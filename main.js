//How to make a standard worker creep of the builder type.
//Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',{ memory: { role: 'builder' } } );

//Gets required files.
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    //starts building stuff.
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
