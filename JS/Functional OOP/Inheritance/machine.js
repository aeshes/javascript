"use strict";

function Machine() {
    var enabled = false;

    this.enable = function() {
        enabled = true;
    };

    this.disable = function() {
        enabled =  false;
    };
}

function CoffeeMachine(power) {
    Machine.call(this);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };
}

var cm = new CoffeeMachine(1000);
cm.enable();
cm.setWaterAmount(1000);
cm.disable();