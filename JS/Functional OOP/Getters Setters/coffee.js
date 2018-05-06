"use strict";

function CoffeMachine(power, capacity = 1000) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    this.run =  function() {
        setTimeout(onReady, getBoilTime());
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Value must be positive");
        }
        if (amount > capacity) {
            throw new Error("Too big amount");
        }
        waterAmount = amount;
    }

    this.getWaterAmount = function() {
        return waterAmount;
    }

    var getBoilTime = function() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log("Coffee is made");
    }

    console.log("Coffee machine is made " + power + " watt");
}

var coffeeMachine = new CoffeMachine(100000, 1000);
coffeeMachine.setWaterAmount(1000);

coffeeMachine.run();