function finishForm(){
    const form = document.querySelector('.login-form');
    const input1 = document.querySelector('input[name = password]');
    input1.setAttribute('name', 'login');
    const input2 = document.createElement('input');
    input2.setAttribute('type', 'password');
    input2.setAttribute('name', 'password');
    form.append(input2);

}

export {finishForm}

// 1. поменять имя первого инпута на логин
// 2. добавить новый инпут
// 3. задать атрибут новому инпуту тип - пароль
// 4. задать атрибут новому инпуту имя - пароль