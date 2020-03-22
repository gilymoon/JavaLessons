function finishList(){
    const list = document.querySelector('.list');
    const one = document.createElement('li').textContent = '1';
    list.prepend(one);
    const four = document.createElement('li').textContent = '4';
    document.querySelector('.special').before(four);
    const six = document.createElement('li').textContent = '6';
    document.querySelector('.special').after(six);
    const eight = document.createElement('li').textContent = '8';
    list.append(eight);
}

export {finishList}