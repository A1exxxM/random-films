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

    removeElem(item,selector) {
        const btnClose = item.querySelector(selector);
        btnClose.addEventListener('click',()=> {
            item.classList.remove('animate__fadeInDown');
            item.style.cssText = `
            margin-top: 0px;
            max-height: 0px;
            overflow: hidden;
            `;
            setTimeout(function() {
                item.remove();
            },700);
        });
    }

    createElem() {
        const item = document.createElement('li');
        item.classList.add('films__list-item','animate__animated', 'animate__fadeInDown');
        item.innerHTML = `
            <div class="films__list-item_name">${this.name.value}</div>
            <div class="films__list-item_author">${this.author.value}</div>
            <div class="films__list-item_delete">
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
        this.removeElem(item,'.films__list-item_delete i');
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