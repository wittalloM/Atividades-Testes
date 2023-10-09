
import questions from './questions.js'

const $qst_box = document.getElementById('question-box')
const $qst_txt = document.getElementById('qst-enun')
const $asw_box = document.getElementById('answers-box')
const $stt_btt = document.getElementById('stt-btt')
const $nxt_btt = document.getElementById('nxt-btt')
const formUsr = document.getElementById('form-usr')

var placar = 0
var currentIndex = 0

$stt_btt.addEventListener('click', Start_game)
$nxt_btt.addEventListener('click', Show_qst)
/* [Função de ordenação de array] 
function ord_qst(a,b) {
    for (questions.question in questions) {}
    if (a.question > b.question){
        return 1
    }
    if (a.question < b.question){
        return -1
    }
    return 0;
}*/


function Start_game() {
    $stt_btt.classList.add('hide');
    Show_qst();
}


function Show_qst() {
    Reset_stt()

    $nxt_btt.classList.add('hide')

    if (questions.length == currentIndex) {
        return End_Game()

    }


    $qst_txt.textContent = questions[currentIndex].question
    questions[currentIndex].answers.forEach(answer => {
        const nw_answer = document.createElement('button')
        nw_answer.classList.add('asw-btt')
        nw_answer.classList.add('answer')
        nw_answer.textContent = answer.text

        if (answer.correct) {
            nw_answer.dataset.correct = answer.correct
        }

        nw_answer.addEventListener('click', Select_asw)
        $asw_box.appendChild(nw_answer)
    })


}

function Select_asw(e) {
    let usr_resp = e.target
    if (usr_resp.dataset.correct) {
        document.body.classList.add('correct-asw')
        placar++;
    }
    else {
        document.body.classList.add('incorrect-asw')
    }


    document.querySelectorAll('.answers').forEach(button => {


        if (button.dataset.corect) {
            button.classList.remove('asw-btt')
            button.classList.add('correct-asw')
        } else {
            button.classList.add('incorrect-asw')
        }

        button.disabled = true
    })


    $nxt_btt.classList.remove('hide')

}



function Reset_stt() {

    currentIndex++
    $qst_box.classList.remove('hide')
    $asw_box.classList.remove('hide');

    document.body.removeAttribute('class')

    while ($asw_box.firstChild) {
        $asw_box.removeChild($asw_box.firstChild)
    }

}



function End_Game() {
    $qst_txt.classList.add('hide')
    $asw_box.classList.add('hide')
    $nxt_btt.classList.add('hide')
   let message = ''

    switch (true) {

        case (placar == 6):
            message = 'Desempenho Excelente'
            break;
        case (placar <= 4):
            message = 'Desempenho Bom'
            break;
        case (placar <= 2 ):
            message = 'Desempanho Fraco'
            break;

        default:
            message = 'Parabéns'
    }

    let status = document.createElement('div')
    status.classList.add('status-box')
    status.innerHTML = `<h3>Parabéns, voçê conseguiu chegar ao final do nosso quiz !</h3>`
    status.innerHTML += `<p> Você fez um total de ${placar} pontos, entre ${questions.length} questões S2 <p>`
    status.innerHTML += `${message}`
    status.innerHTML +=
        `<button class="fns-btt" onclick= window.location.reload()>Reiniciar Quiz
    </button>`

    $qst_box.appendChild(status)

    CadUsr()

}


 function CadUsr () {
formUsr.classList.remove('hide')
 }

