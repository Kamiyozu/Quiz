const quizData = [
    {
        question: "1.Apa yang menjadi tujuan utama dari Desain Komunikasi Visual (DKV)?",
        a: "Meningkatkan penjualan produk secara langsung",
        b: "Mengomunikasikan pesan secara visual kepada audiens",
        c: "Mengembangkan perangkat lunak grafis",
        d: "Menciptakan karya seni murni untuk galeri",
        correct: "b",
    },
    {
        question: "2.Dalam proses desain, tahapan brainstorming bertujuan untuk:",
        a: "Menguji hasil desain kepada klien",
        b: "Menentukan anggaran produksi desain",
        c: "Menciptakan sebanyak mungkin ide awal",
        d: "Mencetak desain dalam bentuk fisik",
        correct: "c",
    },
    {
        question: "3.Elemen dasar dalam desain grafis yang berfungsi sebagai fondasi dari bentuk visual adalah:",
        a: "Garis",
        b: "Tipografi",
        c: "Gambar",
        d: " Warna",
        correct: "a",
    },
    {
        question: "4.Prinsip desain 'keseimbangan' (balance) berarti:",
        a: "Menonjolkan satu elemen saja",
        b: "Membagi elemen visual secara proporsional",
        c: "Menghilangkan elemen yang tidak penting",
        d: "Menggunakan warna-warna cerah dalam desain",
        correct: "b",
    },
    {
        question: "5.Software yang sering digunakan dalam bidang DKV untuk pengolahan vektor adalah:",
        a: "Adobe Photoshop",
        b: "Adobe Premiere",
        c: "Adobe Illustrator",
        d: "Adobe InDesign",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
