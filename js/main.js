import {
    Player
} from "./player.js";
import {
    InputHandler
} from "./input.js";
import {
    Background
} from "./background.js";

window.addEventListener('load', e => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = 793;
    }



    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 20;
            this.speed = 0;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler()
        }

        update(deltaTime, newWidth) {
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            this.width = newWidth;
        }

        draw(context) {
            this.background.draw(context);
            this.player.draw(context)
        }

    }
    canvas.width = window.innerWidth;
    canvas.height = 793;

    const game = new Game(canvas.width, canvas.height);
    console.log(game)
    let lastTime = 0;
    resizeCanvas();

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.addEventListener('resize', resizeCanvas, false);
        game.update(deltaTime, canvas.width);
        game.draw(ctx);
        requestAnimationFrame(animate)
    }

    animate(0)

    // window.addEventListener('scroll', e => {
    //     const scrollY = window.scrollY;
    //     console.log(scrollY)
    //     // if(scrollY >= 2500){
    //     //     return;
    //     // }
    //     // canvas.style.top = `${scrollY}px`
    // })

})