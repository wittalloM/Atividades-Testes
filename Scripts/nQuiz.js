
import questions from './questions.js'


const $qst_txt = document.getElementById('qst-enun')
const $asw_box = document.getElementsByClassName('answers-box')
const $stt_btt = document.getElementById('stt-btt')
const $nxt_btt = document.getElementById('nxt-btt')

var currentIndex, sort_qst, Placar = 0

$stt_btt.addEventListener('click', Start_game)
sort_qst = questions[currentIndex]
console.log(questions[sort_qst].question);

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
    $stt_btt.classList.add('hide')
    $asw_box.classList.remove('hide')
    $nxt_btt.classList.remove('hide')
    Show_qst()
}


function Show_qst() {
    while ($asw_box.firstChild) {
        $asw_box.removeChild($asw_box.firstChild)
    }

    $qst_txt.textContent = questions[sort_qst].question
    questions[currentIndex].answers.forEach(answer => {
        const nw_answer = document.createElement('button')
        nw_answer.classList.add("asw-btt")
        nw_answer.textContent = answer.text

        if (answer.corect) {
            nw_answer.dataset.correct = answer.correct
        }
    })



    $nxt_btt.addEventListener('click', Next_qst)
    currentIndex += 1
    $asw_box.appendChild(nw_answer)
}