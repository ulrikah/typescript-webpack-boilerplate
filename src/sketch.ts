import p5 from 'p5';


const sketch = (p5 : p5) => {
    
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;


    p5.setup = () => {
        const canvas = p5.createCanvas(canvasWidth, canvasHeight);
        p5.background('red');
        p5.rectMode(p5.CENTER);
    }

    p5.draw = () => {
        p5.rect(p5.width / 2, p5.height / 2, 50, 50);
    }
}


export default sketch;