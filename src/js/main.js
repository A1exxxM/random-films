import Add from "./add";
import Start from "./start";


window.addEventListener('DOMContentLoaded', ()=>{
    new Add('.form__form-film','.form__form-name','.form__form','.films__list','input').init();
    new Start('.start__form', '.films__list','.start__form-check','.films').init();
});