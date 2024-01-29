//Imports de elementos do HTML - Imc - Form
const Nome_Imc = document.getElementById("name-Imc")
const Peso_Imc = document.getElementById("peso-Imc")
const Altura_Imc = document.getElementById("alt-Imc")
const Art_txt = document.getElementById("Artigo-Texto1")
const Form_Imc = document.getElementById("Form-Imc")
const Form_User = document.getElementById("Form-User")

// User - Form
const user_Email = document.getElementById("user-email")
const user_Name = document.getElementById("user-name")

// Botões 
const Imc_btt = document.getElementById("Btt-Form-Imc")
const FUser_btt = document.getElementById("Btt-Form-User")

//Div de resposta - Imc
const Resp_Imc = document.getElementById("Resp-Imc")


// Listeners
Imc_btt.addEventListener("click", CkStatus)
FUser_btt.addEventListener("click", CkStatus2)

// Função para checkar(Preenchimento) dos inputs
function CkStatus() {

    if (Nome_Imc.value == '' && Peso_Imc.value == '' && Altura_Imc.value == '') {
        window.alert("Por Favor, Preencha os campos do formulário")
    }
    else if (!Nome_Imc.value || !Peso_Imc.value || !Altura_Imc.value) {
        window.alert("Por favor Preencha TODOS os campos do fomrulário, Nome, Peso em Kg e Altura em Mm")
    }
    else {
        Calc_Imc()

    }
}

// Cálculo do IMC e distr. do resultado 
function Calc_Imc() {
    let Nome_usr = Nome_Imc.value
    let vlrAltura = parseFloat(Altura_Imc.value) * parseFloat(Altura_Imc.value)
    let vlrPeso = Number(Peso_Imc.value)
    let Imc_valor = 0
    let message = ` `

    Imc_valor = vlrPeso / vlrAltura
    Imc_Final = parseInt(Imc_valor)
    let img_div = document.createElement("img")
    img_div.setAttribute("src", " ")


    if (Imc_Final < 21) {
        message = `<p>Olá ${Nome_usr}, seu Imc é igual á : ${Imc_Final}, segundo os nossos dados e a tebela fornecida, você se encontra <p class="enfase">abaixo do peso ideal.</p></p>`
        img_div.setAttribute("src", "../Styles/Imagens/Imc-Negativo (1).png")
        Imc_btt.textContent = "Resetar Dados"
        Imc_btt.classList.add("Btt-Form-Imc")
        Imc_btt.setAttribute("title", "Botão Reset")
        Imc_btt.addEventListener("click", Resetar)
    } else if (Imc_Final == 21 || Imc_Final <= 30) {
        message = `<p>Olá ${Nome_usr}, seu Imc é igual á : ${parseInt(Imc_Final)}, segundo os nossos dados e a tebela fornecida, você se encontra <p class="enfase">dentro do peso ideal.</p></p>`
        img_div.setAttribute("src", "../Styles/Imagens/Imc-Positivo (1).png")
        Imc_btt.textContent = "Resetar Dados"
        Imc_btt.classList.add("Btt-Form-Imc")
        Imc_btt.setAttribute("title", "Botão Reset")
        Imc_btt.addEventListener("click", Resetar)
    }
    else if (Imc_Final > 30) {
        message = `<p>Olá ${Nome_usr}, seu Imc é igual á : ${parseInt(Imc_valor)}, segundo os nossos dados e a tebela fornecida, você se encontra <p class="enfase">acima do peso ideal.</p></p>`
        img_div.setAttribute("src", "../Styles/Imagens/Imc-Exagerado (1).png")
        Imc_btt.textContent = "Resetar Dados"
        Imc_btt.classList.add("Btt-Reset")
        Imc_btt.setAttribute("title", "Botão Reset")
        Imc_btt.addEventListener("click", Resetar)
    }

    console.log("O Valor do Imc do usuário é = " + Imc_Final)
    Art_txt.classList.add("hide")
    Resp_Imc.innerHTML = `${message}`
    Resp_Imc.appendChild(img_div)
}



function Resetar() {

    var entradas = document.querySelectorAll(".Imc-Item");
    let set = confirm("Deseja apagar os dados no formuláio ?");
    if (set) {
        entradas.forEach((entrada) => entrada.value = "")
    }
    Imc_btt.textContent = "Enviar Dados"
    Imc_btt.addEventListener("click", CkStatus)
    console.log("Número de elementos no array QuerySelector: " + entradas.length);
    Resp_Imc.classList.add("hide")
    Art_txt.classList.remove("hide")
}



function CkStatus2() {
    if (!user_Email.value || !user_Name.value) {
        window.alert("Por favor, preencha os 2 campos")
    } else if (user_Email.value == '' && user_Name.value == '') {
        window.alert("Por favor, preencha os 2 campos indicados corretamente")
    } else {
        GUser()
    }
}

function GUser() {
    user_info = Form_User.getElementsByTagName("input")

    let User_Name = user_info[0].value
    let User_Mail = user_info[1].value

    let cad_user = document.createElement("div")
    let user_messagediv = document.getElementById("user-message")

    user_mess_resp = user_messagediv.value
    let user_message = user_messagediv.value
    let message = `<p class= "enfase">Email do Usuário: ${User_Mail}, Nome do usuário: ${User_Name}</p>`

    console.log(user_message);
    cad_user.innerHTML = `${message}`
    Form_User.appendChild(cad_user)

}

//Testes 
/*
function ResetarImputs(name) {
    let entradas = document.querySelectorAll("input [name='" + name + "']");
    console.log(entradas.length)
    entradas.entrada.value = ""
}
*/

