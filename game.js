const game = {
        ctx: undefined,
        canvasSize: {
            w: undefined,
            h: undefined
            },
        blocks: [],
        currentBlock: undefined,
        intervalId: undefined,
        framesCounter: 0,
        speed: 2,
        score: 0,

        init(canvas){
            this.setContext(canvas);
            this.setCanvasDimensions(canvas);
            this.setListeners()
            this.gameStart();
            console.log("initCanvas")
        },


        setContext(canvas){
            this.ctx = canvas.getContext('2d');
        },

        setCanvasDimensions(canvas){
            this.canvasSize.w = 500;
            this.canvasSize.h = 700;
            canvas.setAttribute('width', this.canvasSize.w);
            canvas.setAttribute('height', this.canvasSize.h);
        },

        gameStart(){
            this.intervalId = setInterval(() => {
                this.clearCanvas()
                this.drawAll()

                this.framesCounter ++

                if(this.framesCounter % 100 === 0) {
                    this.createBlock(randomWord(oneLetter))
                
                }    
            }, 1000 / 60);
        },

        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        },

        drawAll(){
            this.blocks.forEach(block => block.draw());

         

            this.showScores();
        },

        createBlock(word) {
            const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
            const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
            const xRandomPosition = Math.trunc(Math.random() * (this.canvasSize.w - 100))
        
            const newBlock = new block(
              this.ctx,
              randomWidth,
              randomHeight,
              this.canvasSize,
              xRandomPosition,
              this.speed,
              word 
            );
        
            this.blocks.push(newBlock);

            if (this.currentBlock === undefined) {
                this.currentBlock = this.blocks[0];
              
            }
        },


        showScores() {
           // show scores
            this.ctx.font = '25px Verdana';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText('Score: ' + this.score, 300, 90);
        },


    // Evento pulsar la tecla
         setListeners() {
             document.addEventListener('keydown', (e) => {
                 let keyCode = e.key
                 if (keyCode >= 'a' && keyCode <= 'z'){
                 console.log(keyCode);     
                 }
             })
         },
} 
