//Has creep remove itself from game.
//Game.creeps['Harvester1'].suicide()

//Has the map become a stable map with no one with weapons in your room. 
//Game.spawns['Spawn1'].room.controller.activateSafeMode();

//Makes a tower at a given location.
//Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

//Ensures the program has to do the base functions it needs to do.
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    
    //Gets the tower to preform any defense requirements and repair all structures.
    var tower = Game.getObjectById('299f364376fda88b941461db');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    //Makes sure each creep gets stuff done.
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
