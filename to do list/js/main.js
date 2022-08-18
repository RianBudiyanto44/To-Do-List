const new_list = document.querySelector("#new-list-form");
const input_list = document.querySelector("#new-list-input");
const container_list = document.querySelector("#container-list");
const submit_list = document.querySelector("#new-list-submit")

submit_list.addEventListener('click', (e) => {
    e.preventDefault();

    const user_input = input_list.value;

    const cont_list = document.createElement('div');
    cont_list.classList.add('cont-list')

    const list_input_element = document.createElement('input');
    list_input_element.classList.add('list_input');
    list_input_element.type = 'text';
    list_input_element.value = user_input;
    list_input_element.setAttribute('readonly', 'readonly');

    cont_list.appendChild(list_input_element);

    const cont_button = document.createElement('div');
    cont_button.classList.add('container-button');


    const button_edit = document.createElement('button');
    button_edit.classList.add('edit');
    button_edit.innerText = 'Edit';

    const button_delete = document.createElement('button');
    button_delete.classList.add('delete');
    button_delete.innerText = 'Delete';

    cont_button.appendChild(button_edit);
    cont_button.appendChild(button_delete);
    cont_list.appendChild(cont_button)
    container_list.appendChild(cont_list);

    input_list.value = '';
    button_edit.addEventListener('click', (e) => {
        if (button_edit.innerText.toLowerCase() == "edit") {
            button_edit.innerText = "Save";
            list_input_element.removeAttribute("readonly", "readonly");
            list_input_element.focus();
        } else {
            button_edit.innerText = "Edit";
            button_edit.setAttribute("readonly", "readonly");
        }
    })

    button_delete.addEventListener('click', (e) => {
        container_list.removeChild(cont_list);
    })
})