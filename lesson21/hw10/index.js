function manageClasses(){
    const one = document.querySelector('one');
    one.classList.add('selected');
    const two = document.querySelector('two');
    two.classList.remove('selected');
    const three = document.querySelector('three');
    three.classList.toggle('three_done');
    const four = document.querySelector('four');
    four.classList.toggle('another-class');
}

export{manageClasses}