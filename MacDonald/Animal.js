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
            const d = document.getElementById("sing");
            const p = document.createElement("p");
            p.textContent = " Old MacDonald had a farm " + this.sound + this.sound + this.sound;
            d === null || d === void 0 ? void 0 : d.appendChild(p);
            console.log(this.sound);
        }
        eat() {
            const d = document.getElementById("eat");
            const p = document.createElement("p");
            p.textContent = this.name + " the " + this.type + " is eating " + this.consumption + " units of " + this.food;
            d === null || d === void 0 ? void 0 : d.appendChild(p);
            return [this.food, this.consumption];
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
