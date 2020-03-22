function getSection(num){
    const neededDataNum = document.querySelector(`span[data-number="${num}"]`);
    return neededDataNum.parentElement.getAttribute('data-section');
}

export {getSection}