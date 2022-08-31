const htmlBody = document.querySelector('body');

const randomClickfunction = function () {
    const colors = ["#002942", "#0Ca708", "red", "blue", "green", "beige", "orange", "purple"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

}