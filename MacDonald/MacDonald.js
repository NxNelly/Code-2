"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        const animals = [];
        animals.push(new Farm.Animal("Bert", "cow", "moo", "grass", 5));
        animals.push(new Farm.Animal("Berta", "cow", "moo", "grass", 5));
        animals.push(new Farm.Animal("Rasmus", "lion", "rawr", "meat", 7));
        animals.push(new Farm.Animal("Chili", "chicken", "cluk cluk", "grain", 2));
        animals.push(new Farm.Animal("Elisa", "chicken", "cluk cluk", "grain", 2));
        animals.push(new Farm.Animal("Tonka", "chicken", "cluk cluk", "grain", 2));
        animals.push(new Farm.Animal("Missy", "cat", "meow", "meat", 3));
        animals.push(new Farm.Animal("Rosa", "cat", "meow", "meat", 3));
        animals.push(new Farm.Animal("Patrick", "pig", "oink", "grain", 6));
        animals.push(new Farm.Animal("Terry", "pig", "oink", "grain", 6));
        const foods = [];
        foods.push(new Farm.Food("grass", 50));
        foods.push(new Farm.Food("meat", 50));
        foods.push(new Farm.Food("grain", 50));
        for (let i = 0; i < animals.length; i++) {
            console.log(animals[i]);
            animals[i].sing();
            const info = animals[i].eat();
            //const currentFood: string = info[0];
            const currentConsumption = info[1];
            const d = document.getElementById("eat");
            const p = document.createElement("p"); //take div and create new paragraph
            switch (info[0]) {
                case "grass":
                    foods[0].update(currentConsumption);
                    //foods[0] = ["grass", newStorageGrass];
                    console.log(foods[0]);
                    p.textContent = " Food left in storage : " + foods[0];
                    break;
                case "grain":
                    foods[1].update(currentConsumption);
                    //foods[1] = ["grain", newStorageGrain];
                    console.log(foods[1]);
                    p.textContent = " Food left in storage : " + foods[1];
                    break;
                case "meat":
                    foods[2].update(currentConsumption);
                    //foods[2] = ["meat", newStorageMeat];
                    p.textContent = " Food left in storage : " + foods[2];
                    break;
            }
            d === null || d === void 0 ? void 0 : d.appendChild(p);
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=MacDonald.js.map