function addSquare(num) {
    for (let i = 0; i < num * num; i++) {
        const newSquare = document.createElement("div");
        newSquare.className = "square";
        newSquare.setAttribute("width", `${(500)/(num) - 2}px`);
        newSquare.setAttribute("height", `${(500)/(num) - 2}px`);
        newSquare.style.flexBasis = `${(500/num - 2)}px`;
        container.appendChild(newSquare);
    }
}

function randomNum() {
    return Math.floor(Math.random() * 255) + 1;
}

const container = document.querySelector(".container");
container.addEventListener('mouseover', (event) => {
    let newRGB = `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;
    // console.log(newRGB);
    if (event.target.className === 'square')
        event.target.style.backgroundColor = newRGB;
});

addSquare(16);