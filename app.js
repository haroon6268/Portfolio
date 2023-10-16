const laptopImg = document.querySelector('.laptopImg');
const projectTitle = document.querySelector('.projectTitle');
const projectTech = document.querySelector('.projectTech');
const projectLink = document.querySelector('.projectLink');

const portfolio = document.querySelector('.portfolio');
const guessANumber = document.querySelector('.guessANumber');
const pong = document.querySelector('.pong');
const statesQuiz = document.querySelector('.statesQuiz');
const snake = document.querySelector('.snake');
const passwordGenerator = document.querySelector('.passwordGenerator');
const modals = document.querySelector('.modals');
const projectBtn = document.querySelectorAll('.projectbtn');
const pig = document.querySelector('.pig');

function fadeIn(element, duration){
    let opacity = 0;
    const interval = 10;
    const increment = interval / duration;

    function fade() {
        opacity += increment;
        element.style.opacity = opacity

        if (opacity < 1){
            requestAnimationFrame(fade);
        }
    }
    fade();
}

const changeProject = function(img, title, tech, link) {
    laptopImg.src = img;
    projectTitle.innerHTML = title;
    projectTech.innerHTML = tech;
    projectLink.setAttribute("href", link);
}
const buttonStyling = function(name){
    for (let btn of projectBtn){
       if (btn.classList.contains(name)){
            btn.classList.add("border-white");
            btn.classList.remove("border-gray-900");
            btn.classList.remove("opacity-50");
       }
       else{
            btn.classList.add("border-gray-900")
            btn.classList.remove("border-white")
            btn.classList.add("opacity-50")
       }
    }
    
}


const showGuessANumber = function(){
    changeProject("./gif/guess.gif", "Guess a Number", "Tech: HTML, CSS, Javascript, Tailwindcss", "https://github.com/haroon6268/Number-Guessing-Game")
    buttonStyling("guessANumber")
}
const showPortfolio = function(){
    changeProject("portfolio.png", "My Portfolio", "Tech: HTML, CSS, Javacript, Tailwindcss", "https://github.com/haroon6268/Portfolio");
    buttonStyling("portfolio");
}
const showPong = function(){
    changeProject("./gif/pong.gif", "Pong", "Tech: Python", "https://github.com/haroon6268/Pong");
    buttonStyling("pong")
}
const showStatesQuiz = function() {
    changeProject("./gif/statesquiz.gif", "US States Quiz", "Tech: Python", "https://github.com/haroon6268/US-States-Quiz");
    buttonStyling("statesQuiz")
}
const showSnake = function() {
    changeProject("./gif/snake.gif", "Snake Game", "Tech: Python", "https://github.com/haroon6268/Snake");
    buttonStyling("snake")
}
const showModal = function() {
    changeProject("./gif/modals.gif", "Modals", "Tech: HTML, CSS, Javascript","https://github.com/haroon6268/modals");
    buttonStyling("modals");
}
const showPig = function(){
    changeProject("./gif/pig.gif", "Pig Game", "Tech: HTML, CSS, Javascript", "https://github.com/haroon6268/pig-game");
}


guessANumber.addEventListener('click', showGuessANumber);
portfolio.addEventListener('click', showPortfolio);
pong.addEventListener('click', showPong);
statesQuiz.addEventListener('click', showStatesQuiz);
snake.addEventListener('click', showSnake);
modals.addEventListener('click', showModal);
pig.addEventListener('click', showPig);


const projectNav = document.querySelector(".projectNav");
const projects = document.querySelector(".projects")
const scrollToProjects = function() {
    projects.scrollIntoView({behavior: "smooth"});
}

projectNav.addEventListener("click", scrollToProjects);

const sideProjNav = document.querySelector('.sideProjNav');
const sideProj = document.querySelector('.sideProj');

const scrollToSideProj = function() {
    sideProj.scrollIntoView({behavior : "smooth"});
}

sideProjNav.addEventListener('click', scrollToSideProj);