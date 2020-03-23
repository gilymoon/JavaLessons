function createButton(buttonText){
    const butt = document.createElement('button');
    const body = document.querySelector('body');
    body.append(butt);
    butt.innerHTML = buttonText;
}

export {createButton}