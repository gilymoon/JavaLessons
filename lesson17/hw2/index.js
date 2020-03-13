const timer = {
    secondsPassed: 0,
    minsPassed: 0, 
    startTimer(){
        setTimeout(() => {
            if(secondsPassed>59){
                this.secondsPassed = 0;
                this.minsPassed++;
            } 
            return this.secondsPassed+5;
        }, 5000)
        },
    getTime(){
        if(this.secondsPassed<10){
            let secBefore10 = '0'+this.secondsPassed;
        }
        else{
            let secBefore10 = this.secondsPassed;
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
