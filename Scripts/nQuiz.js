
import questions from './questions.js'

const $qst_box = document.getElementById('question-box')
const $qst_txt = document.getElementById('qst-enun')
const $asw_box = document.getElementById('answers-box')
const $stt_btt = document.getElementById('stt-btt')
const $nxt_btt = document.getElementById('nxt-btt')

var sort_qst, Placar = 0
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
    $nxt_btt.classList.remove('hide');
    $qst_box.classList.remove('hide')
    $asw_box.classList.remove('hide');
    Show_qst();
}


function Show_qst() {
    while ($asw_box.firstChild) {
        $asw_box.removeChild($asw_box.firstChild)
    }

    $qst_txt.textContent = questions[currentIndex].question
    questions[currentIndex].answers.forEach(answer => {
        const nw_answer = document.createElement('button')
        nw_answer.classList.add('asw-btt')
        nw_answer.textContent = answer.text

        if (answer.correct) {
            nw_answer.dataset.correct = answer.correct
        }
        $asw_box.appendChild(nw_answer)
    })



    $nxt_btt.addEventListener('click', Next_qst)
    currentIndex += 1
}