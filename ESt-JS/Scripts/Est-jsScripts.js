const Nome_Imc = document.getElementById("name-Imc")
const Peso_Imc = document.getElementById("peso-Imc")
const Altura_Imc = document.getElementById("alt-Imc")
const Art_txt = document.getElementById("Artigo-Texto1")
const Form_Imc = document.getElementById("Form-Imc")

const btt_resetar = document.getElementById("Resetar")
const Imc_btt = document.getElementById("Btt-Form-Imc")
const Resp_Imc = document.getElementById("Resp-Imc")



Imc_btt.addEventListener("click", CkStatus)
btt_resetar.addEventListener("click", ResetarImputs("Imput-Imc"))

function CkStatus() {

    if (Nome_Imc.value == '' && Peso_Imc.value == '' && Altura_Imc.value == '') {
        window.alert("Por Favor, Preencha os campos do formulário")
    }
    else if (!Nome_Imc.value || !Peso_Imc.value || !Altura_Imc.value) {
        window.alert("Por favor Preencha TODOS os campos do fomrulário, Nome, Peso em Kg e Altura em Mm")
    }
    else {
        Calc_Imc()
        console.log("Função Chamada")

    }
}

function Calc_Imc() {
    let Imc_valor = 0
    let vlrAltura = parseFloat(Altura_Imc.value)
    let vlrPeso = Number(Peso_Imc.value)
    let Nome_usr = Nome_Imc.value
    let message = ` `
    Art_txt.classList.add("hide")


    Imc_valor = vlrPeso / vlrAltura * vlrAltura 

    if (Imc_valor <= 19) {
        message = `<p>Olá ${Nome_usr}, seu Imc é igual á: ${Imc_valor}, segundo os nossos dados e a tebela fornecida, você se encontra <strong class="enfase">abaixo do peso ideal.</strong></p>`
    } else if (Imc_valor = 20 && Imc_valor < 23) {
        message = `<p>O seu Imc é igual á: ${Imc_valor}, segundo os nossos dados e a tebela fornecida, você se encontra <strong class="enfase">dentro do peso ideal.</strong></p>`
    }
    else if (Imc_valor = 24 && Imc_valor <= 30) {
        message = `<p>O seu Imc é igual á: ${Imc_valor}, segundo os nossos dados e a tebela fornecida, você se encontra <strong class="enfase">acima do peso ideal.</strong></p>`
    }

    console.log("O Valor do Imc do usuário é = " + Imc_valor)
    Resp_Imc.innerHTML = `${message}`
}


/*
function Resetar() {
    
    var entradas = document.querySelectorAll(".Imc-Item");
    let set = confirm("Deseja apagar os dados no formuláio ?");
    if (set) {
        alert("Os campos do formuário serão resetados");
        console.log("Número de elementos no array QuerySelector: " + entradas.length);
        for (let i = 0; i < entradas.length; i++){
            entradas[i].value = "";
        }
    }
}

*/

function ResetarImputs(name){
    let entradas = document.querySelectorAll("imput[name='"+name+"']");
    [].map.call(entradas, entrada => entrada.value = "");
}

/*
function allReset(){
    let entradas = document.querySelectorAll(".Imc-Item")
    entradas.forEach((entrada) => {
        entrada.value = ""
    });
    
} 
*/