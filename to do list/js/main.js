const submit_task = document.querySelector(".submit");
const input_task = document.querySelector("#new-task-input");
const container = document.querySelector(".container");


submit_task.addEventListener('click', (e) => {
    e.preventDefault();


    const user_input = input_task.value;

    const container_task = document.createElement('div');
    container_task.classList.add('container-task')

    const box = document.createElement('form');
    box.classList.add('box');
    const task = document.createElement('form');
    task.classList.add('task');
    const container_button = document.createElement('div');
    container_button.classList.add('container-button');

    container_task.appendChild(box);
    container_task.appendChild(task);
    container_task.appendChild(container_button);

    const input_element = document.createElement('input');
    input_element.setAttribute("id", "new-task-input");
    input_element.type = 'text';
    input_element.value = user_input;
    input_element.setAttribute('readonly', 'readonly');

    task.appendChild(input_element);

    const button_edit = document.createElement('button');
    button_edit.classList.add('edit');
    button_edit.innerText = 'Edit';
    button_edit.setAttribute("hidden", "hidden");

    const button_delete = document.createElement('button');
    button_delete.classList.add('delete');
    button_delete.innerText = 'Delete';
    button_delete.setAttribute("hidden", "hidden");

    container_button.appendChild(button_edit);
    container_button.appendChild(button_delete);

    container.appendChild(container_task);

    input_task.value = '';

    container_task.addEventListener('mouseover', (e) => {
        button_delete.removeAttribute("hidden");
        button_edit.removeAttribute("hidden");
    })

    container_task.addEventListener('mouseout', (e) => {
        button_delete.setAttribute("hidden", "hidden");
        button_edit.setAttribute("hidden", "hidden");
    })

    button_edit.addEventListener('click', (e) => {
        if (button_edit.innerText.toLowerCase() == "edit") {
            button_edit.innerText = "Save";
            input_element.removeAttribute("readonly");
            input_element.focus();
        } else {
            button_edit.innerText = "Edit";
            input_element.setAttribute("readonly", "readonly");
        }
    })

    button_delete.addEventListener('click', (e) => {
        container.removeChild(container_task);
    })
})
