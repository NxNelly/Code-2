import { Food } from "./Food";

export class Animal {
    name: string;
    type: string;
    sound: string;
    food: string;
    consumption: number;


    constructor(_name: string, _type: string, _sound: string, _food: string, _consumption: number,) {
        this.name = _name;
        this.type = _type;
        this.sound = _sound;
        this.food = _food;
        this.consumption = _consumption;

    }

    sing(): void {
        console.log(this.name, this.sound = this.sound)

    }

    eat(): void {
        //const d: HTMLElement = document.getElementById("div");
        //const p: HTMLElement = document.createElement("p");
        //p.textContent = this.food;
        //d?.appendChild(p);
        let currentFood: string = this.food
    }
}



