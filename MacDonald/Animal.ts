namespace Farm {
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

        eat(): [string, number] {
            const d: HTMLElement = document.getElementById("eat");
            const p: HTMLElement = document.createElement("p");
            p.textContent = this.name + " the " + this.type + " is eating " + this.consumption + " units of " + this.food;
            //p.textContent = " Food left in storage : ";// move to main
            d?.appendChild(p);

            return [this.food, this.consumption]

        }
    }
}