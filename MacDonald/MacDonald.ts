namespace Farm {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        const animals: Animal[] = [];
        animals.push(new Animal("Bert", "cow", "moo", "grass", 5));
        animals.push(new Animal("Berta", "cow", "moo", "grass", 5));
        animals.push(new Animal("Rasmus", "lion", "rawr", "meat", 7));
        animals.push(new Animal("Chili", "chicken", "cluk cluk", "grain", 2));
        animals.push(new Animal("Elisa", "chicken", "cluk cluk", "grain", 2));
        animals.push(new Animal("Tonka", "chicken", "cluk cluk", "grain", 2));
        animals.push(new Animal("Missy", "cat", "meow", "meat", 3));
        animals.push(new Animal("Rosa", "cat", "meow", "meat", 3));
        animals.push(new Animal("Patrick", "pig", "oink", "grain", 6));
        animals.push(new Animal("Terry", "pig", "oink", "grain", 6));

        let foods: Food[] = [];
        foods.push(new Food("grass", 50));
        foods.push(new Food("meat", 50));
        foods.push(new Food("grain", 50));


        for (let i: number = 0; i < animals.length; i++) {
            console.log(animals[i]);
            animals[i].sing();
            const info: [string, number] = animals[i].eat();


            //const currentFood: string = info[0];
            const currentConsumption: number = info[1];

            const d: HTMLElement = document.getElementById("eat")!;
            const p: HTMLElement = document.createElement("p"); //take div and create new paragraph

            let newStorageGrass: number;

            switch (info[0]) {
                case "grass":
                    newStorageGrass = foods[0].update(currentConsumption);
                    console.log(newStorageGrass);
                    foods[0] = ["grass", newStorageGrass];
                    console.log(foods[0]);
                    p.textContent = " Food left in storage : " + foods[0];
                    break;

                case "grain":
                    const newStorageGrain: number = foods[1].update(currentConsumption);
                    foods[1] = ["grain", newStorageGrain];
                    p.textContent = " Food left in storage : " + foods[1];
                    break;

                case "meat":
                    const newStorageMeat: number = foods[2].update(currentConsumption);
                    foods[2] = ["meat", newStorageMeat];
                    p.textContent = " Food left in storage : " + foods[2];
                    break;

            }


            d?.appendChild(p);

        }
    }
}