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

var spawnHub = 'Spawn1';

module.exports.loop = function () {
    
    //Gets the tower to preform any defense requirements and repair all structures.
//     for(var name in Game.towers){
//         var tower = Game.towers[name];
//     }
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
    
    
    //Variable type that logs the amount of each type of creep in game.
    var builder = _.filter(Game.creeps,(creep) => creeep.memory.role == 'builder');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps,(creep) => creep.memory.role == 'upgrader');

    //If the game has less than two harvesters it should update the count.
    if(Game.spawns[spawnHub].spawning && upgraders.length < 1){
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns[spawnHub].spawnCreep([WORK,CARRY,MOVE], newName, 
        {memory: {role: 'upgrader'}});
    }
    else if(Game.spawns[spawnHub].spawning && harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns[spawnHub].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }
    else if(Game.spawns[spawnHub].spawning && builder.length < 2){
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns[spawnHub].spawnCreep([WORK,CARRY,MOVE], newName, { memory: {role: 'builder'}})
    }
    
    //Creates the visual that the spawn is making a new creep.
    if(Game.spawns[spawnHub].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns[spawnHub].spawning.name];
        Game.spawns[spawnHub].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns[spawnHub].pos.x + 1, 
            Game.spawns[spawnHub].pos.y, 
            {align: 'left', opacity: 0.8});
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
