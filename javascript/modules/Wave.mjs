export default class Wave {
    constructor(divId) {

        this.yOffset = 0;
        this.previousY = 0;

        const attachedDiv = document.querySelector(`.${divId}`);
        const instance = this;
        const sketch = (p5) => {

            let myCanvas;
            let noiseOffset;
            let noiseStep;
            let noiseWidth;
            let waveOffset;
            let waveStep;

            p5.setup = function () {
                myCanvas = p5.createCanvas(attachedDiv.clientWidth, attachedDiv.clientHeight * 1.05);
                myCanvas.parent(attachedDiv);

                noiseOffset = 0;    
                noiseStep = 0.002;
                noiseWidth = 0.2;
                waveOffset = 0;
                waveStep = 0.002;
            };

            p5.draw = function () {
                p5.clear();

                p5.beginShape();
                p5.fill(0);
                p5.noStroke();
                
                let noiseValue;
                let y;

                for (let x = 0; x < p5.width + 5; x++) {
                    //noiseValue = p5.noise(p5.map(x, 0, p5.width + 5, 0, noiseWidth) + noiseOffset);
                    //noiseValue *= p5.height * 0.40;
                    //y = p5.height * 0.50 + noiseValue - instance.yOffset;

                    //noiseValue = p5.noise(p5.map(x, 0, p5.width + 5, 0, noiseWidth) + noiseOffset);
                    //noiseValue = p5.sin(noiseValue * p5.TWO_PI);                    
                    //noiseValue *= p5.height * 0.10;
                    //y = p5.height * 0.70 + noiseValue - instance.yOffset;

                    noiseValue = p5.noise(p5.map(x, 0, p5.width + 5, 0, noiseWidth) + noiseOffset);
                    noiseValue = p5.sin(p5.map(x, 0, p5.width + 5, 0, p5.PI / 2 + noiseValue) + waveOffset + noiseValue * 5);                    
                    noiseValue *= p5.height * 0.10;
                    y = p5.height * 0.80 + noiseValue - instance.yOffset;

                    p5.vertex(x, y);
                }
                waveOffset += waveStep;
                noiseOffset += noiseStep;

                p5.vertex(p5.width + 5, p5.height);
                p5.vertex(0, p5.height);

                p5.endShape(p5.CLOSE);
            };

            p5.windowResized = function () {
                myCanvas = p5.resizeCanvas(attachedDiv.clientWidth, attachedDiv.clientHeight * 1.05);
            }
        };

        let myp5 = new p5(sketch, divId);

        window.addEventListener("scroll", () => {
            this.handleScroll();
        });
    }

    handleScroll() {
        const delta = this.previousY - window.pageYOffset;

        this.yOffset -= delta * 0.25;
        this.yOffset = this.yOffset > 300 ? 300 : this.yOffset;
        this.yOffset = this.yOffset < 0 ? 0 : this.yOffset;

        this.previousY = window.pageYOffset;
    }
}