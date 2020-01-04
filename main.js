var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    //Logs available resources.
    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }
    //GIves each creep their necessary roles.
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
