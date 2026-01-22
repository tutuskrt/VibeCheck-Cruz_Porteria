const out = document.getElementById("out");

const API_BASE = "http://localhost:3000";

function show(obj) {
  if (typeof obj === "string") {
    out.textContent = obj;
    return;
  }
  // Show message and counter in a readable way
  if (obj.message && typeof obj.smashes === "number") {
    out.textContent = `${obj.message}\nTotal smashes: ${obj.smashes}`;
  } else if (obj.message) {
    out.textContent = obj.message;
  } else if (obj.fortune) {
    out.textContent = obj.fortune;
  } else if (obj.joke) {
    out.textContent = obj.joke;
  } else {
    out.textContent = JSON.stringify(obj, null, 2);
  }
}

async function getJSON(url) {
  const res = await fetch(url);
  return res.json();
}

document.getElementById("btnFortune").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/fortune`);
  show(data);
});

document.getElementById("btnJoke").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/joke`);
  show(data);
});

document.querySelectorAll(".btnMood").forEach(btn => {
  btn.addEventListener("click", async () => {
    const mood = btn.dataset.mood;
    const data = await getJSON(`${API_BASE}/api/vibe?mood=${mood}`);
    show(data);
  });
});

document.getElementById("btnSmash").addEventListener("click", async () => {
  const res = await fetch(`${API_BASE}/api/smash`, { method: "POST" });
  const data = await res.json();
  show({ message: "SMASH registered 💥", ...data });
});

document.getElementById("btnSecret").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/secret?code=411L`);
  show(data);
});

// Multiplication counter button logic
let multiplyCounter = 1;
document.getElementById("btnMultiply").addEventListener("click", async () => {
  multiplyCounter *= 2;
  show({ message: `Multiplication Counter: ${multiplyCounter}` });
});
