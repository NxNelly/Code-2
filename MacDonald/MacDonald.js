"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Food } from "./Food";
const Animal_1 = require("./Animal");
const Food_1 = require("./Food");
const animals = [];
animals.push(new Animal_1.Animal("Bert", "cow", "moo", "grass", 5));
animals.push(new Animal_1.Animal("Berta", "cow", "moo", "grass", 5));
animals.push(new Animal_1.Animal("Rasmus", "lion", "rawr", "meat", 7));
animals.push(new Animal_1.Animal("Chili", "chicken", "cluk cluk", "grain", 2));
animals.push(new Animal_1.Animal("Elisa", "chicken", "cluk cluk", "grain", 2));
animals.push(new Animal_1.Animal("Tonka", "chicken", "cluk cluk", "grain", 2));
animals.push(new Animal_1.Animal("Missy", "cat", "meow", "meat", 3));
animals.push(new Animal_1.Animal("Rosa", "cat", "meow", "meat", 3));
animals.push(new Animal_1.Animal("Partick", "pig", "oink", "grain", 6));
animals.push(new Animal_1.Animal("Terry", "pig", "oink", "grain", 6));
const storage = [];
storage.push(new Food_1.Food("grass", 50));
storage.push(new Food_1.Food("meat", 50));
storage.push(new Food_1.Food("grain", 50));
console.log(1);
//# sourceMappingURL=MacDonald.js.map