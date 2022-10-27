let text = document.getElementById("txt");
let size = document.getElementById("size");
let qrcolor = document.getElementById("qrcolor");
let bgcolor = document.getElementById("bgcolor");

let pulsante = document.getElementById("send");
let img = document.getElementById("img");

pulsante.addEventListener("click", function() { 
    img.innerHTML='<img src="http://api.qrserver.com/v1/create-qr-code/?' +
    'data=' + text + '&' +
    'size=' + size + 'x' + size + '&' +
    'color=' + qrcolor + '&' +
    'bgcolor=' + bgcolor + '"/>';
});
