const generatorBtn = document.getElementById("generator-btn");
const lottoNumbersContainer = document.querySelector(".lotto-numbers");
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeBtn.textContent = "Light Mode";
}

// Theme Toggle Logic
themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "Dark Mode";
    }
});

// Generator Logic
generatorBtn.addEventListener("click", () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbersContainer.innerHTML = "";
    sortedNumbers.forEach(number => {
        const numberElement = document.createElement("span");
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
});