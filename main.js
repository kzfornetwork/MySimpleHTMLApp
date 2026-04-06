const generatorBtn = document.getElementById("generator-btn");
const lottoNumbersContainer = document.querySelector(".lotto-numbers");
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// AI Model Elements
const modelStatus = document.getElementById("model-status");
const imageUpload = document.getElementById("image-upload");
const imagePreview = document.getElementById("image-preview");
const predictionResult = document.getElementById("prediction-result");

// Teachable Machine URL
const AI_MODEL_URL = "https://teachablemachine.withgoogle.com/models/oAUX8Sv2hH/";
let model;

// Load AI Model
async function loadModel() {
    try {
        const modelURL = AI_MODEL_URL + "model.json";
        const metadataURL = AI_MODEL_URL + "metadata.json";
        
        model = await tmImage.load(modelURL, metadataURL);
        modelStatus.textContent = "AI model ready! Upload a smartphone image.";
        imageUpload.disabled = false;
    } catch (error) {
        console.error("Error loading model:", error);
        modelStatus.textContent = "Failed to load AI model. Please refresh.";
    }
}

loadModel();

// Handle Image Upload
imageUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        imagePreview.src = event.target.result;
        imagePreview.style.display = "block";
        
        // Wait for image to load before predicting
        imagePreview.onload = () => predictImage();
    };
    reader.readAsDataURL(file);
});

// Predict Image
async function predictImage() {
    if (!model) return;

    predictionResult.innerHTML = "<p>Analyzing image...</p>";
    
    try {
        const prediction = await model.predict(imagePreview);
        
        // Find the result with highest probability
        let bestMatch = prediction[0];
        for (let i = 1; i < prediction.length; i++) {
            if (prediction[i].probability > bestMatch.probability) {
                bestMatch = prediction[i];
            }
        }

        const className = bestMatch.className.toUpperCase();
        const probability = (bestMatch.probability * 100).toFixed(1);
        const statusClass = className.includes("OK") ? "status-ok" : "status-ng";

        predictionResult.innerHTML = `
            <div class="status-badge ${statusClass}">${className}</div>
            <p class="confidence-msg">Confidence: ${probability}%</p>
        `;
    } catch (error) {
        console.error("Prediction error:", error);
        predictionResult.innerHTML = "<p>Error during classification.</p>";
    }
}

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