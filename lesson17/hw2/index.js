const timer = {
    secondsPassed: 0,
    minsPassed: 0, 
    start: 0,
    startTimer(){
       this.start = setInterval(() => {
            if(secondsPassed>59){
                this.secondsPassed = 0;
                this.minsPassed++;
            } 
            return this.secondsPassed+5;
        }, 5000)
        },
    getTime(){
        let secBefore10;
        if(this.secondsPassed<10){
            secBefore10 = '0'+this.secondsPassed;
        }
        else{
            secBefore10 = this.secondsPassed;
        }
        return `${this.minsPassed}:${secBefore10}`;
    },
    stopTimer() {
        clearInterval(this.start)
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
}

export{timer}
