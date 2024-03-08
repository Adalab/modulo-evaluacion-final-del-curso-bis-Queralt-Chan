'use sctrict'

const htmlList = document.querySelector ('.js_list');

let listBooks = [];

async function loadData () {

    const response = await fetch ('http://localhost:5000/api/libros');
    const dataLibros = await response.json();
    listBooks = dataLibros;
    renderLibros();
}

loadData();


function renderLibros () {
    let listBooks = '';
    for (book of listBooks) {
        html += renderOne(book);
    }
    htmlList.innerHTML = listBooks;
}

function renderOne (libro) {
    const { nombre, autor, paginas} = libro;
    return 
    `<li class=".js_list">
    <h3 class="name">${nombre}</h3>
    <h3 class="author">${autor}</h3>
    <h3 class="pages"> ${paginas}</h3>
    </li>`
};