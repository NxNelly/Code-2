"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_name, _type, _sound, _food, _consumption) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.consumption = _consumption;
        }
        sing() {
            console.log(this.name, this.sound = this.sound);
        }
        eat() {
            const d = document.getElementById("eat");
            const p = document.createElement("p");
            p.textContent = this.name + " the " + this.type + " is eating " + this.consumption + " units of " + this.food;
            //p.textContent = " Food left in storage : ";// move to main
            d === null || d === void 0 ? void 0 : d.appendChild(p);
            return [this.food, this.consumption];
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
