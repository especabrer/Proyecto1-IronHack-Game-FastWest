class block {
    constructor(ctx, width, height, canvasSize, position, speed, word) {
        this.ctx = ctx
        this.blockSize = { w: width, h: height }
        this.canvasSize = canvasSize
        this.blockPosition = { x: position, y: -100 }
        this.speed = speed
        this.imageInstance = new Image();
        this.imageInstance.src = "/imagenes/textura madera.jpeg"
        this.word = word
     }

        draw() {
            this.ctx.drawImage(
                 this.imageInstance,
                 this.blockPosition.x,
                 this.blockPosition.y,
                 this.blockSize.w,
                 this.blockSize.h
                 );
            this.ctx.fillText(this.word, this.blockPosition.x, this.blockPosition.y)
         console.log('me muevo');
            this.move();
        }

        move() {
            this.blockPosition.y += this.speed;
        }
}