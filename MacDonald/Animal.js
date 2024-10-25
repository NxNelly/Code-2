"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
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
        //const d: HTMLElement = document.getElementById("div");
        //const p: HTMLElement = document.createElement("p");
        //p.textContent = this.food;
        //d?.appendChild(p);
        let currentFood = this.food;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map