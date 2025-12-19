const paragraphs = [
    "Learning to code is a gradual process that requires patience, regular practice, and a strong desire to solve problems. At the beginning, concepts may feel confusing, but with time and consistency, everything becomes clearer and easier to understand.",

    "Typing speed is an important skill for students and professionals who work on computers daily. Practicing typing not only improves speed but also increases accuracy and confidence while working on documents and coding projects.",

    "Web development is the process of creating websites and web applications using technologies like HTML for structure, CSS for styling, and JavaScript for adding interactivity. Together, these technologies form the foundation of the modern web.",

    "Consistency is more important than talent when it comes to learning new technical skills. Spending a small amount of time every day practicing typing or coding can lead to significant improvement over a long period of time.",

    "Technology is constantly evolving, and learning new tools and skills is essential to stay updated in the digital world. Continuous learning helps individuals adapt to changes and grow in their careers."
];


const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");
const timeText = document.getElementById("time");
const wpmText = document.getElementById("wpm");
const accuracyText = document.getElementById("accuracy");
const message = document.getElementById("message");
const timeSelect = document.getElementById("timeSelect");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");

let timer, timeLeft, started = false;

input.addEventListener("paste", e => e.preventDefault());

startBtn.onclick = () => {
    paragraph.innerText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    timeLeft = timeSelect.value;
    timeText.innerText = timeLeft;

    input.value = "";
    input.disabled = false;
    message.innerText = "";
    started = true;

    clearInterval(timer);
    timer = setInterval(() => {
        if (--timeLeft >= 0) timeText.innerText = timeLeft;
        else submitTest();
    }, 1000);
};

submitBtn.onclick = submitTest;

function submitTest() {
    if (!started || !input.value.trim()) {
        message.style.color = "red";
        message.innerText = "Please type something!";
        return;
    }

    clearInterval(timer);
    input.disabled = true;
    started = false;

    let words = input.value.trim().split(" ").length;
    let minutes = (timeSelect.value - timeLeft) / 60;
    wpmText.innerText = Math.round(words / minutes);

    let correct = 0;
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === paragraph.innerText[i]) correct++;
    }

    accuracyText.innerText = Math.round((correct / input.value.length) * 100);
    message.style.color = "green";
    message.innerText = "Successfully submitted!";
}
