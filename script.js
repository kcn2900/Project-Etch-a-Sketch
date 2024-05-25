function addSquare(num) {
    container.replaceChildren();
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

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let temp = +input.value;
        if (typeof temp === "number" && !isNaN(temp)) {
            if (temp <= 0 || temp > 100) {
                alert("Number out of range");
            }
            else
                addSquare(temp);
        }
        else {
            alert("Not a valid number");
        }
    }
})

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let children = container.childNodes;
    container.childNodes.forEach((child) => child.style.backgroundColor = 'beige');
})