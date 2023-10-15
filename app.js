const mintButton = document.querySelector('.mint')
const globeButton = document.querySelector('.globe')
const chipotleButton = document.querySelector('.chipotle')
const title = document.querySelector('.title');
const subtitle = document.querySelector('.location');
const notes = document.querySelector('.notes');

globeButton.addEventListener("click", showGlobe);
mintButton.addEventListener("click", showMint);
chipotleButton.addEventListener("click", showChipotle);

function showGlobe(){
    title.style.opacity = 0;
    subtitle.style.opacity = 0
    notes.style.opacity = 0

    title.innerHTML = "Globe Life Liberty National"
    subtitle.innerHTML = "Richmond, Virginia"
    notes.innerHTML = "- Tbh I hated this Job<br>- I made $1000 my first week and learned sales"
        
    fadeIn(title,1000);
    fadeIn(subtitle, 1000);
    fadeIn(notes, 1000)

    mintButton.style.opacity = "50%"
    globeButton.style.opacity = "100%"
    chipotleButton.style.opacity = "50%"

    mintButton.style.borderLeftColor = "#111827";
    globeButton.style.borderLeftColor = "white";
    chipotleButton.style.borderLeftColor = "#111827";
}

function showMint(){
    title.style.opacity = 0;
    subtitle.style.opacity = 0
    notes.style.opacity = 0

    title.innerHTML = "Mint Detail"
    subtitle.innerHTML = "LA, California"
    notes.innerHTML = "This job is a WIP."
        
    fadeIn(title,1000);
    fadeIn(subtitle, 1000);
    fadeIn(notes, 1000)

    mintButton.style.opacity = "100%"
    globeButton.style.opacity = "50%"
    chipotleButton.style.opacity = "50%"

    mintButton.style.borderLeftColor = "white";
    globeButton.style.borderLeftColor = "#111827";
    chipotleButton.style.borderLeftColor = "#111827";
}

function showChipotle(){
    title.style.opacity = 0;
    subtitle.style.opacity = 0
    notes.style.opacity = 0

    title.innerHTML = "Chipotle"
    subtitle.innerHTML = "Richmond, Virginia"
    notes.innerHTML = "- Learned customer service.<br>- Worked the line"
    
    fadeIn(title,1000);
    fadeIn(subtitle, 1000);
    fadeIn(notes, 1000)

    mintButton.style.opacity = "50%"
    globeButton.style.opacity = "50%"
    chipotleButton.style.opacity = "100%"

    mintButton.style.borderLeftColor = "#111827";
    globeButton.style.borderLeftColor = "#111827";
    chipotleButton.style.borderLeftColor = "white";
}

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