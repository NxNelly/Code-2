"use strict";
var Asteroid_Project;
(function (Asteroid_Project) {
    class Asteroid {
        constructor(_size, _position) {
            console.log("asteroid constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new Asteroid_Project.Vector(0, 0);
            this.velocity = new Asteroid_Project.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("Asteroid move");
            const offset = new Asteroid_Project.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += Asteroid_Project.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Asteroid_Project.crc2.canvas.height;
            }
            if (this.position.x > Asteroid_Project.crc2.canvas.width) {
                this.position.x -= Asteroid_Project.crc2.canvas.width;
            }
            if (this.position.y > Asteroid_Project.crc2.canvas.height) {
                this.position.y -= Asteroid_Project.crc2.canvas.height;
            }
        }
        draw() {
            //console.log("Asteroid draw");
            Asteroid_Project.crc2.save();
            Asteroid_Project.crc2.translate(this.position.x, this.position.y);
            Asteroid_Project.crc2.scale(this.size, this.size);
            Asteroid_Project.crc2.translate(-50, -50);
            Asteroid_Project.crc2.stroke(Asteroid_Project.asteroidPaths[this.type]);
            Asteroid_Project.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new Asteroid_Project.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Asteroid_Project.Asteroid = Asteroid;
})(Asteroid_Project || (Asteroid_Project = {}));
