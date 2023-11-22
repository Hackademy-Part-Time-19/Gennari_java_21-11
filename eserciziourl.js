let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999";

let urlseparato = url.split("?");

console.log(urlseparato);

let parametri = urlseparato[1].split("&");

console.log(parametri);

parametri.forEach(function (parametri) {
    let valore = parametri.split("=")
    console.log(valore[1])
    
})


