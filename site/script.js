function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch("https://hflhvgycvx5gmszqiwza56x6be0medcs.lambda-url.ap-south-1.on.aws/");
  let data = await response.json();
  counter.innerHTML = `Views: ${data}`;
}

updateCounter();