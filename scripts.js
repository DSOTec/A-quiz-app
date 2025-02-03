const startBtn = document.querySelector(".start-btn");
const infoBox = document.querySelector(".rule-box");
const infoExitBtn = document.querySelector(".exit");
const infoContBtn = document.querySelector(".cont");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const timerElement = document.querySelector(".time-sec"); 
const scoreText = document.querySelector(".score-text"); 
const replayQuiz = document.querySelector(".restart-btn");
const exitQuiz = document.querySelector(".exit-btn");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

startBtn.addEventListener("click", (e) => {
    infoBox.style.display = "block";
});

infoExitBtn.addEventListener("click", (e) => {
    infoBox.style.display = "none";
});

infoContBtn.addEventListener("click", (e) => {
    infoBox.style.display = "none"
    quizBox.style.display = "block";
    showQuestion(); 
});

let questions = [
    {
        numb: 1,
        question: "Which HTML tag is used to display an image?",
        answer: "img",
        Options: [
            "img",
            "image",
            "picture",
            "photo"
        ]
    },
    {
        numb: 2,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        Options: [
            "High Tech Markup Language",
            "Hyperlink and Text Management Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language"
        ]
    },
    {   
        numb:3,
        question: "Which of the following is the correct HTML element for inserting a line break?",
        answer: "<br>",
        Options: [
            "<br>", 
            "<break>", 
            "<lb>", 
            "<line>"
        ]
    },
    {   
        numb:4,
        question: "What does the <head> element contain?",
        answer: "Metadata about the document",
        Options: [
            "Metadata about the document", 
            "The main content", 
            "The footer content", 
            "None of the above"

        ]
        
    },
    {
        numb:5,
        question: "Which of the following is not a valid HTML tag?",
        answer: "spanz",
        Options: [
            "div",
             "section", 
             "header",
              "spanz"
            
        ]
        
    },
    {
        numb:6,
        question: "Which HTML tag is used to define an unordered list?",
        answer: "ul",
        Options: [
            "ul",
             "ol", 
             "li", 
             "list"
            ]
        
    },
    {
        numb:7,
        question: "What is the correct HTML element for the largest heading?",
        answer: "h1",
        Options: ["heading", "h1", "h6", "h2"]
        
    },
    {   
        numb:8,
        question: "What does the <title> tag define in an HTML document?",
        Options: ["The title of the document", "The content of the document", "The header of the document", "The background color of the page"],
        answer: "The title of the document"
    },
    {
        numb:9,
        question: "What does the <a> tag define?",
        options: ["A hyperlink", "An anchor", "A paragraph", "An image"],
        answer: "A hyperlink"
    },
    {
        numb:10,
        question: "Which HTML tag is used to define an image?",
        options: ["image", "img", "picture", "src"],
        answer: "img"
    },
    {
        numb:11,
        question: "Which attribute is used to define the destination of a link?",
        Options: ["src", "href", "alt", "target"],
        answer: "href"
    },
    {
        numb:12,
        question: "What is the purpose of the <form> tag?",
        Options: ["To display content", "To capture user input", "To create a table", "To add a header"],
        answer: "To capture user input"
    },
    {
        numb:13,
        question: "What does CSS stand for?",
        Options: ["Cascading Style Sheets", "Cascading Style Script", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        numb:14,
        question: "Which property is used to change the background color in CSS?",
        Options: ["background-color", "bg-color", "color", "background"],
        answer: "background-color"
    },
    {
        numb:15,
        question: "Which of the following is the correct CSS syntax to select an element with the id 'myElement'?",
        Options: ["#myElement", ".myElement", "myElement", "*myElement"],
        answer: "#myElement"
    },
    {
        numb:16,
        question: "How do you make a list that lists items vertically?",
        Options: ["list-style: vertical;", "display: list;", "list-type: vertical;", "display: block;"],
        answer: "display: block;"
    },
    {
        numb:17,
        question: "Which property is used to change the font of an element?",
        Options: ["font-family", "font-style", "text-style", "font-weight"],
        answer: "font-family"
    },
    {
        numb:18,
        question: "Which of the following is the correct CSS syntax to select all <p> elements inside a <div>?",
        Options: ["div p {}", "div > p {}", "div + p {}", "p div {}"],
        answer: "div p {}"
    },
    {
        numb:19,
        question: "How do you add a comment in CSS?",
        Options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
        answer: "/* comment */"
    },
    {
        numb:20,
        question: "Which CSS property controls the text size?",
        Options: ["font-size", "text-size", "font-style", "text-color"],
        answer: "font-size"
    },
    {
        numb:21,
        question: "How do you center a block element in CSS?",
        Options: ["margin: auto;", "text-align: center;", "align: center;", "position: center;"],
        answer: "margin: auto;"
    },
    {
        numb:22,
        question: "Which property is used to set the space between the content and the border of an element?",
        Options: ["padding", "margin", "border-spacing", "content-spacing"],
        answer: "padding"
    },
    {
        numb:21,
        question: "Which of the following is the correct way to write a JavaScript comment?",
        Options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"],
        answer: "// This is a comment"
    },
    {
        question: "Which method is used to write text to the HTML document in JavaScript?",
        Options: ["write()", "document.write()", "console.log()", "console.print()"],
        answer: "document.write()"
    },
    {
        question: "What does the '===' operator mean in JavaScript?",
        Options: ["Strict equality (both value and type are equal)", "Loose equality (only value is equal)", "Not equal", "Not defined"],
        answer: "Strict equality (both value and type are equal)"
    },
    {
        question: "Which keyword is used to define a variable in JavaScript?",
        Options: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which function is used to parse a string into an integer?",
        Options: ["parseInt()", "parseFloat()", "toString()", "parse()"],
        answer: "parseInt()"
    },
    {
        question: "Which method removes the last element from an array in JavaScript?",
        Options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "What is the correct syntax to create a new array in JavaScript?",
        Options: ["var arr = []", "var arr = {}", "var arr = ()", "var arr = ''"],
        answer: "var arr = []"
    },
    {
        question: "Which of the following is used to add an event listener in JavaScript?",
        Options: ["element.addEventListener()", "element.onClick()", "element.eventListener()", "element.addListener()"],
        answer: "element.addEventListener()"
    },
    {
        question: "What does the 'typeof' operator do in JavaScript?",
        Options: ["Returns the type of a variable", "Checks if a variable is undefined", "Checks if a variable is null", "Returns the value of a variable"],
        answer: "Returns the type of a variable"
    },
    {
        question: "Which method is used to join two or more arrays in JavaScript?",
        Options: ["join()", "merge()", "concat()", "combine()"],
        answer: "concat()"
    },
    
    {
        question: "Which HTML tag is used to define a table?",
        Options: ["table", "tr", "td", "table-row"],
        answer: "table"
    },
    {
        question: "Which of the following elements is used to define a row in a table?",
        Options: ["<row>", "<tr>", "<th>", "<td>"],
        answer: "<tr>"
    },
    {
        question: "Which attribute is used to define the relationship between two linked documents?",
        Options: ["rel", "link", "href", "type"],
        answer: "rel"
    },
    {
        question: "Which element is used to define a hyperlink in HTML?",
        Options: ["<a>", "<href>", "<link>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which tag is used to define a list item in HTML?",
        Options: ["<list-item>", "<li>", "<item>", "<ul-item>"],
        answer: "<li>"
    },
    {
        question: "What is the correct syntax for embedding a video in HTML?",
        Options: ["<video src='movie.mp4'>", "<video>movie.mp4</video>", "<video href='movie.mp4'>", "<embed src='movie.mp4'>"],
        answer: "<video src='movie.mp4'>"
    },
    {
        question: "What is the purpose of the alt attribute in an image tag?",
        Options: ["It defines the text to display when the image is not found", "It defines the background color of the image", "It defines the source of the image", "It defines the size of the image"],
        answer: "It defines the text to display when the image is not found"
    },
    {
        question: "Which HTML element is used for displaying a form input?",
        Options: ["<input>", "<form>", "<text>", "<textarea>"],
        answer: "<input>"
    },
    {
        question: "How do you define the background color of a webpage in HTML?",
        options: ["background-color: #FFFFFF;", "bgcolor: #FFFFFF;", "<bg color='#FFFFFF'>", "<background color='#FFFFFF'>"],
        answer: "bgcolor: #FFFFFF;"
    }
];

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = `${timeLeft}s`; 
        } else {
            clearInterval(timer); 
            nextQuestion(); 
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 10;
    timerElement.textContent = `${timeLeft}s`;
}


function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.querySelector(".question-text span");
    questionText.textContent = currentQuestion.question;

    const optionsList = document.querySelector(".options-list");
    optionsList.innerHTML = ""; 

    
    currentQuestion.Options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("options");
        optionElement.innerHTML = `
            <span>${option}</span>`
            ;
        optionsList.appendChild(optionElement);

        
        optionElement.addEventListener("click", () => {
            checkAnswer(option, currentQuestion.answer);
        });
    });

    resetTimer();
    startTimer();
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextQuestion(); 
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(); 
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.style.display = "none";
    infoBox.style.display = "none";
    resultBox.style.display = "block";
    scoreText.innerHTML = `${score} out of ${questions.length}`; // Display score
}

replayQuiz.addEventListener("click", (e => {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.style.display = "none"; 
    quizBox.style.display = "block";
    showQuestion(); 
}));

exitQuiz.addEventListener("click", (e) => {
    resultBox.style.display = "none";
});
