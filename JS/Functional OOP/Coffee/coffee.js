"use strict";

function CoffeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerID;

    this.run =  function() {
        timerID = setTimeout(onReady, getBoilTime());
    }

    this.stop = function() {
        clearTimeout(timerID);
    }

    var getBoilTime = function() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log("Coffee is made");
    }

    console.log("Coffee machine is made " + power + " watt");
}

var coffeeMachine = new CoffeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();