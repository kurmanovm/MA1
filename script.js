const questions = [
    { question: "Алгоритм дегеніміз не?", answers: ["Қадамдардың реттілігі", "Деректерді сақтау әдісі", "Бағдарламалау тілдері"], correct: 0 },
    { question: "Қандай құрылым мәліметтерді сақтау үшін қолданылады?", answers: ["Массив", "Функция", "Класс"], correct: 0 },
    { question: "Қайсысы программалау тілдері болып табылады?", answers: ["C++", "HTML", "CSS"], correct: 0 },
    { question: "Интернет дегеніміз не?", answers: ["Компьютер", "Компьютерлер желісі", "Жеке сервер"], correct: 1 },
    { question: "Компьютердің негізгі құрылғылары?", answers: ["Монитор, пернетақта", "Принтер, факс", "Телевизор, ұялы телефон"], correct: 0 },
    { question: "Деректердің ең кіші өлшем бірлігі?", answers: ["Бит", "Байт", "Килобайт"], correct: 0 },
    { question: "Программалау дегеніміз не?", answers: ["Бейнелеу өнері", "Компьютерге тапсырма беру", "Ән жазу"], correct: 1 },
    { question: "Процессордың негізгі қызметі?", answers: ["Деректерді сақтау", "Деректерді өңдеу", "Графика шығару"], correct: 1 },
    { question: "Жадтың қай түрі уақытша сақтау үшін қолданылады?", answers: ["Қатты диск", "RAM", "CD диск"], correct: 1 },
    { question: "HTML дегеніміз не?", answers: ["Бағдарламалау тілі", "Белгілеу тілі", "Сурет салу тілі"], correct: 1 },
    { question: "DNS не үшін қажет?", answers: ["Сайт атауын IP-адреске айналдыру үшін", "Файлдарды сақтау үшін", "Фотоларды көру үшін"], correct: 0 },
    { question: "Вирус дегеніміз не?", answers: ["Бағдарлама", "Зиянды бағдарлама", "Фильм түрі"], correct: 1 },
    { question: "Файлдың кеңейтілімі не үшін керек?", answers: ["Файл көлемін азайту үшін", "Файл түрін көрсету үшін", "Файл атауын өзгерту үшін"], correct: 1 },
    { question: "Компьютерлік желінің түрі?", answers: ["LAN", "FAN", "PAN"], correct: 0 },
    { question: "Python тілі қай салада жиі қолданылады?", answers: ["Деректер ғылымы", "Музыка жазу", "Спорт"], correct: 0 }
];

let currentQuestion = 0;

function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    q.answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.className = 'answer';
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(idx);
        answersContainer.appendChild(btn);
    });
    document.getElementById('counter').textContent = `Сұрақ ${currentQuestion+1}/${questions.length}`;
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.answer');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correct) {
            btn.classList.add('correct');
        } else if (idx === selected) {
            btn.classList.add('incorrect');
        }
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert('Тест аяқталды!');
    }
}

displayQuestion();