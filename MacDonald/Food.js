"use strict";
var Farm;
(function (Farm) {
    class Food {
        constructor(_type, _storage) {
            this.type = _type;
            this.storage = _storage;
        }
        update(_currentConsumption) {
            this.storage = this.storage - _currentConsumption;
            return this.storage;
        }
    }
    Farm.Food = Food;
})(Farm || (Farm = {}));
//# sourceMappingURL=Food.js.map