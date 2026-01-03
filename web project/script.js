/* MAP */
function openMap() {
  const address =
    "108/43 Vijaya Lakshmi Enclave 1st Floor H No 2 PJR Enclave Rd Gangaram ICRISAT Colony Hyderabad Telangana 500050";

  const url =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  window.open(url, "_blank");
}


/* TODO */
let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;
  tasks.push(input.value);
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => {
      tasks.splice(i, 1);
      renderTasks();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function clearAllTasks() {
  tasks = [];
  renderTasks();
}

/* TIMER */
let seconds = 0;
let running = true;

setInterval(() => {
  if (running) {
    seconds++;
    updateTimer();
  }
}, 1000);

function updateTimer() {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  document.getElementById("timeDisplay").innerText =
    `Time elapsed: ${h}:${m}:${s}`;
}

function pauseTimer() {
  running = !running;
}

function resetTimer() {
  seconds = 0;
  updateTimer();
}

/* FORM */
function submitForm() {
  let valid = true;
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  if (document.getElementById("name").value === "") {
    document.getElementById("nameError").innerText = "Please enter your name.";
    valid = false;
  }

  if (!document.getElementById("email").value.includes("@")) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address.";
    valid = false;
  }

  if (document.getElementById("password").value.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters long.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").innerText =
      "Your information is saved in this browser!";
  }

  return false;
}

function clearForm() {
  document.getElementById("contactForm").reset();
  document.getElementById("successMsg").innerText = "";
}
