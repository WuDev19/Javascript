function onSubmit() {
    alert("Form submitted!");
}

let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.position = "fixed"; //vín noBtn to the viewport
    noBtn.style.left = "0";
    noBtn.style.top = "0";
    noBtn.style.transition = "none";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 2}px`;
});
