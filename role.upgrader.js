var roleUpgrader = {
    
    //Default execution of the function.
    /** @param {Creep} creep **/
    run: function(creep) {
      //Checks to see if the creep can still carry or stuff, if it can it will aquire more material or move closer to its goal.
	    if(creep.store[RESOURCE_ENERGY] == 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        //Checks if it needs to upgrade the controller.
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = roleUpgrader;
