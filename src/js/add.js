export default class Add{
    constructor(name,author,form,container,inputs) {
        this.name = document.querySelector(name);
        this.author = document.querySelector(author);
        this.form = document.querySelector(form);
        this.container = document.querySelector(container);
        this.inputs = document.querySelectorAll(inputs);
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    createElem() {
        const item = document.createElement('li');
        item.classList.add('films__list-item');
        item.innerHTML = `
            <div class="films__list-item_name">${this.name.value}</div>
            <div class="films__list-item_author">${this.author.value}</div>
            <div class="films__list-item_delete">
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
        this.container.appendChild(item);
    }


    init() {
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault();
            this.createElem();
            this.clearInputs();
        });
    }
}