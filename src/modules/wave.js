const p5 = require("p5");

class Wave {
    /**    
     * Attaches a canvas that has a neat wave animation to a given element id.
     * Stay wavy 🌊🌊🌊. 
     * @param {string} id the id of the element that you want to attach the Wave to
     * @param {number} startOffset a perctange (represented as a decimal) that reprsents the start of the wave 
     * @param {number} span a perctange (represented as a decimal) of how far the wave should span up and down
     * @param {string} color the hexadecimal representation of the desired color of the wave
     */
    constructor(id, startOffset, span, color) {

        this.waveStartOffset = startOffset;
        this.waveHeight = span;
        this.waveColor = color;

        const attachedDiv = document.querySelector(`#${id}`);
        const instance = this;
        const sketch = (p5) => {

            let myCanvas;
            let noiseOffset;
            let noiseStep;
            let noiseWidth;
            let waveOffset;
            let waveStep;
            let maxAngle;

            p5.setup = function () {
                myCanvas = p5.createCanvas(attachedDiv.clientWidth, attachedDiv.clientHeight);
                myCanvas.parent(attachedDiv);

                noiseOffset = p5.random() * p5.TWO_PI;
                noiseStep = 0.002 + p5.int(p5.random() * 0.003);
                noiseWidth = 0.2;
                waveOffset = p5.random() * p5.TWO_PI;
                waveStep = 0.002 + p5.int(p5.random() * 0.003);
                maxAngle = p5.random() * p5.PI;

                if (id === "wave-landing") {
                    noiseOffset = 0;
                    noiseStep = 0.002;
                    noiseWidth = 0.2;
                    waveOffset = 0;
                    waveStep = 0.002;
                    maxAngle = p5.PI / 2;
                }
            };

            p5.draw = function () {
                // Only update if within view.
                if (!(
                        attachedDiv.offsetTop < window.scrollY + window.innerHeight &&
                        attachedDiv.offsetTop + attachedDiv.clientHeight > window.scrollY
                    )) {
                    return;
                }

                p5.clear();

                p5.beginShape();
                p5.fill(instance.waveColor);
                p5.noStroke();

                let noiseValue;
                let y;

                for (let x = 0; x < p5.width + 5; x++) {
                    noiseValue = p5.noise(p5.map(x, 0, p5.width + 5, 0, noiseWidth) + noiseOffset);
                    noiseValue = p5.sin(p5.map(x, 0, p5.width + 5, 0, maxAngle + noiseValue) + waveOffset + noiseValue * 5);
                    noiseValue *= p5.height * instance.waveHeight;

                    y = p5.height * instance.waveStartOffset + noiseValue;

                    p5.vertex(x, y);
                }
                waveOffset += waveStep;
                noiseOffset += noiseStep;

                p5.vertex(p5.width + 5, p5.height);
                p5.vertex(0, p5.height);

                p5.endShape(p5.CLOSE);
            };

            p5.windowResized = function () {
                myCanvas = p5.resizeCanvas(attachedDiv.clientWidth, attachedDiv.clientHeight);
            }
        };

        new p5(sketch, id);
    }
}

module.exports.Wave = Wave;