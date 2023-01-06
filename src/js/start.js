export default class Start {
    constructor(form,films,checkbox,container) {
        this.form = document.querySelector(form);
        this.films = document.querySelector(films);
        this.checkbox = document.querySelector(checkbox);
        this.container = document.querySelector(container);
    }

    filmList() {
        this.array = [];
        this.films.childNodes.forEach(film => {
            this.array.push(film.querySelector('.films__list-item_name').textContent);
        });
    }

    createList() {
        this.filmList();
        this.container.childNodes.forEach(child => {
            child.classList.add('animate__animated', 'animate__fadeOut');
        });
        setTimeout(() => {
            this.container.innerHTML = '';
            this.cardList = document.createElement('ul');
            this.cardList.classList.add('card__wrapper');
            this.container.appendChild(this.cardList);
        }, 1000);
    }

    createCard() {
        this.createList();
        setTimeout(()=>{
            this.array.forEach(elem => {
                const card = document.createElement('li');
                card.classList.add('card','animate__animated', 'animate__fadeIn');
                card.innerHTML = `
                <div class = "card__name">${elem}</div>
                <div class = "card__count">100</div>
                `;
                this.cardList.appendChild(card);
            });
        },1000);
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createCard();
        });
    }
}