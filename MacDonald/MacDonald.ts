namespace Farm {
    const animals: Animal[] = [];
    animals.push(new Animal("Bert", "cow", "moo", "grass", 5));
    animals.push(new Animal("Berta", "cow", "moo", "grass", 5));
    animals.push(new Animal("Rasmus", "lion", "rawr", "meat", 7));
    animals.push(new Animal("Chili", "chicken", "cluk cluk", "grain", 2));
    animals.push(new Animal("Elisa", "chicken", "cluk cluk", "grain", 2));
    animals.push(new Animal("Tonka", "chicken", "cluk cluk", "grain", 2));
    animals.push(new Animal("Missy", "cat", "meow", "meat", 3));
    animals.push(new Animal("Rosa", "cat", "meow", "meat", 3));
    animals.push(new Animal("Partick", "pig", "oink", "grain", 6));
    animals.push(new Animal("Terry", "pig", "oink", "grain", 6));

    const storage: Food[] = [];
    storage.push(new Food("grass", 50));
    storage.push(new Food("meat", 50));
    storage.push(new Food("grain", 50));

    console.log(animals);
}