let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

console.log(listaProdotti)

let listaOrdinataNomi = listaProdotti.sort(function (prodotto1, prodotto2) {

    let nameA = prodotto1.nome.toLowerCase();
    let nameB = prodotto2.nome.toLowerCase();

    // Compare the names
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0; // Names are equal
    }


})

console.log(listaOrdinataNomi)

