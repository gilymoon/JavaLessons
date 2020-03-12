const callbackPrompt = {
    message: 'Tell me your number', 
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms){
        setTimeout(this.showPrompt(), 1000)
    }
}

export {callbackPrompt};