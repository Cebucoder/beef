let menuCont = document.getElementById('menu-content');
let genreCont = document.getElementById('genre-cont');
let categoryCont = document.getElementById('categories-cont');

function showMenu(){
    menuCont.classList.toggle('show-menu-content');
    categoryCont.classList.remove('show-categories-cont');
    genreCont.classList.remove('show-genre');
}
// showGnere()
function showGnere(){
    genreCont.classList.toggle('show-genre');
    categoryCont.classList.remove('show-categories-cont');
    menuCont.classList.remove('show-menu-content');
}
function showCategory(){
    categoryCont.classList.toggle('show-categories-cont');
    genreCont.classList.remove('show-genre');
    menuCont.classList.remove('show-menu-content');
}