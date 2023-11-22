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
function filtraNellaLista(listaProdotti) {
    let listaFiltrata = []

    for (let i = 0; i < listaProdotti.length; i++){
        if (listaProdotti[i].prezzo > 250) {
            
            listaFiltrata.push(listaProdotti[i])

        }
    }
    return listaFiltrata
}
let listaFiltrata = filtraNellaLista(listaProdotti)
console.log(listaFiltrata)