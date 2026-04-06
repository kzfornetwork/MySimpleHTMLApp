const generatorBtn = document.getElementById("generator-btn");
const lottoNumbersContainer = document.querySelector(".lotto-numbers");

generatorBtn.addEventListener("click", () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    lottoNumbersContainer.innerHTML = "";
    for (const number of numbers) {
        const numberElement = document.createElement("span");
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    }
});