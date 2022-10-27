let dollaro = document.getElementById("dollaro");
let euro = document.getElementById("euro");
let yen = document.getElementById("yen");
let rublo = document.getElementById("rublo");
let sterlina = document.getElementById("sterlina");

dollaro.addEventListener("change", ConvertDollaro);
euro.addEventListener("change", ConvertEuro);
yen.addEventListener("change", ConvertYen);
rublo.addEventListener("change", ConvertRublo);
sterlina.addEventListener("change", ConvertSterlina);

function ConvertDollaro() {
    let val = dollaro.value;
    euro.value = 1.0274 * val;
    yen.value = 146.991 * val;
    rublo.value = 63.7895 * val;
    sterlina.value = 0.89376 * val;
}

function ConvertEuro() {
    let val = euro.value;
    dollaro.value = 0.97316 * val;
    yen.value = 143.057 * val;
    rublo.value = 62.0773 * val;
    sterlina.value = 0.86915 * val;
}

function ConvertYen() {
    let val = yen.value;
    dollaro.value = 0.0068 * val;
    euro.value = 0.00699 * val;
    rublo.value = 0.43391 * val;
    sterlina.value = 0.00601 * val;
}

function ConvertRublo() {
    let val = rublo.value;
    dollaro.value = 0.01566 * val;
    euro.value = 0.01609 * val;
    yen.value = 2.3016 * val;
    sterlina.value = 0.01426 * val;
}

function ConvertSterlina() {
    let val = sterlina.value;
    dollaro.value = 1.11831 * val;
    euro.value = 1.14898 * val;
    yen.value = 166.302 * val;
    rublo.value = 70.0048 * val;

}