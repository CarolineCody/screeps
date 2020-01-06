var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
      
      //Updates the creeps state to harvest more resources.
      if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
      //Updates the creeps state to upgrade the room controller.
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }

      //Preforms the upgrade action onto the room controller.
	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
      }
      //Preforms the harvest action on the nearest source.
      else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
      }
	}
};
//Adds a module of the name "roleUpgrader".
module.exports = roleUpgrader;
