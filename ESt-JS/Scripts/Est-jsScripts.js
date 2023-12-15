const Nome_Imc = document.getElementById("name-Imc")
const Peso_Imc = document.getElementById("peso-Imc")
const Altura_Imc = document.getElementById("alt-Imc")

const Resp_Imc = document.getElementById("Resp-Imc")
const Art_txt = document.getElementById("Artigo-Texto1")

const Imc_btt = document.getElementById("Btt-Form-Imc")

Imc_btt.addEventListener("click", CkStatus)

let vlrPeso, vlrAltura

function CkStatus() {

    if (Nome_Imc.value == '' && Peso_Imc.value == '' && Altura_Imc.value == '') {
        window.alert("Por Favor, Preencha os campos do formulário")
    }
    else if (!Nome_Imc.value || !Peso_Imc.value || !Altura_Imc.value) {
        window.alert("Por favor Preencha TODOS os campos do fomrulário, Nome, Peso em Kg e Altura em Mm")
    }
    else {

        console.log("Segunda opção funcionando perfeitamente")
        vlrAltura = parseFloat(Altura_Imc.value)
        vlrPeso = Number(Peso_Imc.value)

    }
    Calc_Imc
}

function Calc_Imc(vlrAltura, vlrPeso) {

    Art_txt.classList.add("hide")
    let Nome_usr = Nome_Imc.value
    let message = ` `

    var Imc_valor = vlrAltura * vlrAlturvar / vlrPeso

    if (Imc_valor <= 19) {
        message = `<h2>Olá ${Nome_usr}, seu Imc é igual á: ${Imc_valor}, segundo os nossos dados e a tebela fornecida, você se encontra <strong> Abaixo do peso ideal. </strong></h2>`
    } else if (Imc_valor = 20 && Imc_valor < 23) {
        message = `<h2>O seu Imc é igual á: ${Imc_valor}, segundo os nossos dados e a tebela fornecida, você se encontra <strong> Dentro do peso ideal. </strong></h2>`
    }
    else if (Imc_valor = 24 && Imc_valor <= 30) {
        message = `<h2>O seu Imc é igual á: ${Imc_valor}, segundo os nossos dados e a tebela fornecida, você se encontra <strong> Acima do peso ideal. </strong></h2>`
    }

    Resp_Imc.innerHTML = `${message}`








}