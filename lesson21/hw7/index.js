function createButton(buttonText){
    const butt = document.createElement('button');
    document.querySelector('body').append(butt).innerHTML = buttonText;
}

export {createButton}