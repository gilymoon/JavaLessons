function finishList(){
    const list = document.querySelector('.list');
    const one = document.createElement('li');
    one.textContent = '1';
    list.prepend(one);
    const four = document.createElement('li');
    four.textContent = '4';
    const specialClass = document.querySelector('.special');
    specialClass.before(four);
    const six = document.createElement('li');
    six.textContent = '6';
    specialClass.after(six);
    const eight = document.createElement('li');
    eight.textContent = '8';
    list.append(eight);
}

export {finishList}