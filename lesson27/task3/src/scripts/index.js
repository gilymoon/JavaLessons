import { initTodoListHandlers } from './todolist.js'
import { renderTasks } from './rendering.js'

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    initTodoListHandlers();
});

const onStorageChange = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
}

window.addEventListener('storage', onStorageChange);