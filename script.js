const lightMode = document.getElementById("lightmode")
const darkMode = document.getElementById("darkmode")

function turn_light() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem('userTheme', 'light-mode');
}

function turn_dark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem('userTheme', 'dark-mode');
}

lightMode.addEventListener('click', turn_light)
darkMode.addEventListener('click', turn_dark)