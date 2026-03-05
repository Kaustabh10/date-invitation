const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let yesSize = 1;
const maxSize = 1.6; // limit for button growth


function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // grow yes button but only until limit
    if (yesSize < maxSize) {
        yesSize += 0.1;
        yesBtn.style.transform = `scale(${yesSize}) translateX(-15px)`;
    }
}


// desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// mobile touch
noBtn.addEventListener("touchstart", moveNoButton);



yesBtn.onclick = () => {

    document.getElementById("question").style.display = "none";

    const celebrate = document.getElementById("celebrate");
    celebrate.style.display = "flex";

    createHearts();

};



function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);

    }

}
