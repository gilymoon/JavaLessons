  
import { onCreateTask } from './taskCreator.js';
import { onToggleTask } from './taskChanger.js';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click', onCreateTask);

    const todoListElem = document.querySelector ('.list');
    todoListElem.addEventListener('click', onToggleTask)
}