class form{
    constructor(){
        this.button=createButton('MONKEY RUNNER GAME')
        this.button2=createButton('BALLOON BUSTER GAME')
        this.button3=createButton('GHOST RUNNER GAME')
        this.button4=createButton('T REX GAME')
    }
    hide(){
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
    }
    display(){
        this.button.position(200,200)
        this.button2.position(400,200)
        this.button3.position(600,200)
        this.button4.position(800,200)
        this.button.mousePressed(()=>{
         this.button.hide();
         gameState=1;
        

        })
        this.button2.mousePressed(()=>{
            this.button2.hide();
            gameState=2;
           
   
           })
           this.button3.mousePressed(()=>{
            this.button3.hide();
            gameState=3;
           
   
           })
           this.button4.mousePressed(()=>{
            this.button4.hide();
            gameState=4;
           
   
           })
    }
}