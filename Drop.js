class Drop{
    constructor(){
        this.size = rand(15,25);
        this.x = rand(0,width);
        this.y= rand(-80,height+80);
        this.text = getRandomText();
        this.update();
    }
    
    draw(){
        textSize(this.size);
        if(Math.random()>0.1)
            fill(37,219,173);
        else
            fill(170,250,170);
        text(this.text,this.x,this.y);
    }
    
    update(){
        this.y+=this.size;
        
        if(this.y>height+80){
            this.y = rand(-80,this.size);
            this.x = rand(0,width);
        }
        
        this.text = getRandomText();     
        this.draw();
    }
}

function rand(min,max){
    return floor(random(min,max));
}

function getRandomText(){
    return letters[rand(0,letters.length)]
}
