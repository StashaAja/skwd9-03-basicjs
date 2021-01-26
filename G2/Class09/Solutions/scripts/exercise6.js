let inputButton = document.getElementById("inputButton");
let paragraph = document.getElementById("paragraph");

function calculateArea(inputUno, inputDos) {
    let a = parseFloat(inputUno);
    let b = parseFloat(inputDos);

    let area = a * b;
    paragraph.innerText = `The area is: ${area}`;
}

function calculatePerimeter(inputUno, inputDos) {
    let a = parseFloat(inputUno);
    let b = parseFloat(inputDos);

    let perimeter = 2 * a + 2 * b;
    paragraph.innerText = `The perimeter is: ${perimeter}`;
}

inputButton.addEventListener("click", function () {                 //Question: Dali smeam vaka i dali e okej?
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value;
    calculateArea(inputOne, inputTwo);
    paragraph.addEventListener("mouseover", function () {
        calculatePerimeter(inputOne, inputTwo);
        this.style.color = "green";
        this.style.fontSize = "35px";

    })
})
