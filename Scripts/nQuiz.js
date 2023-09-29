
import questions from './questions.js'

const $qst_box = document.getElementById('question-box')
const $qst_txt = document.getElementById('qst-enun')
const $asw_box = document.getElementById('answers-box')
const $stt_btt = document.getElementById('stt-btt')
const $nxt_btt = document.getElementById('nxt-btt')

var sort_qst, placar = 0
var currentIndex = 0

$stt_btt.addEventListener('click', Start_game)
sort_qst = questions[currentIndex]
console.log(questions[currentIndex].question);

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

    $qst_box.classList.remove('hide')
    $asw_box.classList.remove('hide');
    Show_qst();
}


function Show_qst() {
    Reset_stt()

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
        placar++
    }
    else {
        document.body.classList.add('incorrect-asw')
    }


    document.querySelectorAll('.answers').forEach(button => {

        if (button.dataset.corect) {
            button.classList.add('correct-asw')
        } else {
            button.classList.add('incorrect-asw')
        }

        button.disabled = true
    })


    $nxt_btt.classList.remove('hide')
    $nxt_btt.addEventListener('click', Show_qst)
}



function Reset_stt() {

    currentIndex++

    document.body.removeAttribute('class')

    while ($asw_box.firstChild) {
        $asw_box.removeChild($asw_box.firstChild)
    }

}



function End_Game() {
    $qst_txt.classList.add('hide')
    $asw_box.classList.add('hide')
    $stt_btt.classList.remove('hide')
    $nxt_btt.classList.add('hide')
    $stt_btt.textContent = 'Reiniciar Quiz'

    let status = document.createElement('div')
    status.innerHTML = `<h3>Parabéns, voçê conseguiu chegar ao final do nosso quiz !</h3>`
    status.innerHTML += `<p> Você fez um total de ${placar} pontos,Parabéns<p>`

    $qst_box.appendChild(status)

}




