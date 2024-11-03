"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    window.addEventListener("load", handleLoad);
    const asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids are starting.");
        const canvas = document.querySelector("canvas");
        if (!canvas) // or if(canvas == null)
            return;
        Asteroid_Project.crc2 = canvas.getContext("2d");
        Asteroid_Project.crc2.fillStyle = "black";
        Asteroid_Project.crc2.strokeStyle = "white";
        Asteroid_Project.crc2.fillRect(0, 0, Asteroid_Project.crc2.canvas.width, Asteroid_Project.crc2.canvas.height);
        Asteroid_Project.createPaths();
        console.log("Asteroids paths", Asteroid_Project.asteroidPaths);
        createAsteroids(5);
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("shoot Laser");
        const hotspot = new Asteroid_Project.Vector(_event.clientX - Asteroid_Project.crc2.canvas.offsetLeft, _event.clientY - Asteroid_Project.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidid(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidid(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const position = _asteroid.position.copy();
                const fragment = new Asteroid_Project.Asteroid(_asteroid.size / 2, position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroid_Project.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        Asteroid_Project.crc2.fillRect(0, 0, Asteroid_Project.crc2.canvas.width, Asteroid_Project.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        //ship.draw();
        //handleCollisions();
    }
})(Asteroid_Project || (Asteroid_Project = {}));
