"use strict";
var Farm;
(function (Farm) {
    class Food {
        constructor(_type, _storage) {
            this.type = _type;
            this.storage = _storage;
        }
        checkStock() {
        }
    }
    Farm.Food = Food;
})(Farm || (Farm = {}));
