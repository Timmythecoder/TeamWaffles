import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPl8uaPdFS89m6X4M3OrzTSSeHhw-GkRkRk",
  authDomain: "team-waffles-acs.firebaseapp.com",
  projectId: "team-waffles-acs",
  storageBucket: "team-waffles-acs.appspot.com",
  messagingSenderId: "636130806538",
  appId: "1:636130806538:web:281c39ba2e72debd2748f3",
  measurementId: "G-HEC29JWVFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to surveyQuestions
const surveyRef = ref(database, "surveyQuestions");

// Fetch survey questions and populate the survey
const surveyContainer = document.getElementById("survey-container");

onValue(surveyRef, (snapshot) => {
    const questions = snapshot.val();
    surveyContainer.innerHTML = ""; // Clear existing content

    if (questions) {
        // Iterate through questions and create cards
        let questionCount = 1; // To number the questions starting from 1
        for (const key in questions) {
            const question = questions[key];
            const card = document.createElement("div");
            card.className = "card";

            const questionNumber = document.createElement("div");
            questionNumber.className = "question-number";
            questionNumber.textContent = `${questionCount}.`; // Use questionCount for numbering

            const questionText = document.createElement("div");
            questionText.className = "question-text";
            questionText.textContent = question.question;

            let inputElement;
            if (question.type === "text") {
                inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.placeholder = "Type your answer here";
            } else if (question.type === "textarea") {
                inputElement = document.createElement("textarea");
                inputElement.placeholder = "Type your answer here";
            }

            card.appendChild(questionNumber);
            card.appendChild(questionText);
            card.appendChild(inputElement);
            surveyContainer.appendChild(card);

            questionCount++; // Increment question number for each iteration
        }
    }

    // Handle survey submission
    const submitButton = document.getElementById("submit-survey");
    submitButton.addEventListener("click", () => {
        const responseData = {};
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {
            const input = card.querySelector("input, textarea");
            if (input) {
                responseData[index + 1] = input.value; // Save answers with question number as key
            }
        });

        const responsesRef = ref(database, "responses");
        const newResponseRef = push(responsesRef);
        set(newResponseRef, responseData)
            .then(() => {
                // Show the completion screen and hide the survey
                document.querySelector(".container").style.display = "none";
                document.getElementById("completion-screen").style.display = "flex";
            })
            .catch((error) => {
                console.error("Error saving response:", error);
            });
    });

    // Add event listener for "Back to Dashboard" button
    const backToDashboardButton = document.getElementById("back-to-dashboard");
    if (backToDashboardButton) {
        backToDashboardButton.addEventListener("click", () => {
            window.location.href = "dashboard.html"; // Redirect to the dashboard
        });
    }
});
