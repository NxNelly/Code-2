"use strict";
var Farm;
(function (Farm) {
    class Food {
        constructor(_type, _storage) {
            this.type = _type;
            this.storage = _storage;
        }
        update(_currentConsumption) {
            const newStorage = this.storage - _currentConsumption;
            return newStorage;
        }
    }
    Farm.Food = Food;
})(Farm || (Farm = {}));
