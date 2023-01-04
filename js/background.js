class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    };

    update(){
        if(this.x < -this.width) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier;
    };
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width * 2, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game){
        this.game = game;
        this.width = 928;
        this.height = 793;
        this.layerImage1 = layer01;
        this.layerImage2 = layer02;
        this.layerImage3 = layer03;
        this.layerImage4 = layer04;
        this.layerImage5 = layer05;
        this.layerImage6 = layer06;
        this.layerImage7 = layer07;
        this.layerImage8 = layer08;
        this.layerImage9 = layer09;
        this.layerImage10 = layer10;
        this.layerImage11 = layer11;
        this.layerImage12 = layer12;
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layerImage1);
        this.layer2 = new Layer(this.game, this.width, this.height, 0, this.layerImage2);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.15, this.layerImage3);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.19, this.layerImage4);
        this.layer5 = new Layer(this.game, this.width, this.height, 0.24, this.layerImage5);
        this.layer6 = new Layer(this.game, this.width, this.height, 0.27, this.layerImage6);
        this.layer7 = new Layer(this.game, this.width, this.height, 0.30, this.layerImage7);
        this.layer8 = new Layer(this.game, this.width, this.height, 0.36, this.layerImage8);
        this.layer9 = new Layer(this.game, this.width, this.height, 0.45, this.layerImage9);
        this.layer10 = new Layer(this.game, this.width, this.height, .6, this.layerImage10);
        this.layer11 = new Layer(this.game, this.width, this.height, .6, this.layerImage11);
        this.layer12 = new Layer(this.game, this.width, this.height, .6, this.layerImage12);
        this.backgroundLayers = [this.layer1,this.layer2,this.layer3,this.layer4,this.layer5,this.layer6,this.layer7,this.layer8,this.layer9,this.layer10,this.layer11,this.layer12];
    }
    update(){
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }

    draw(context){
        this.backgroundLayers.forEach(layer => {
            layer.draw(context)
        })
    }
};