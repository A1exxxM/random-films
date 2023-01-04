import Add from "./add";


window.addEventListener('DOMContentLoaded', ()=>{
    new Add('.form__form-film','.form__form-name','.form__form','.films__list','input').init();
});