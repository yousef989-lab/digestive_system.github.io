document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('userTheme');

    if (savedTheme === 'dark-mode') {
        if (document.getElementsByClassName('card-body').length > 0)
        {
            document.body.style.backgroundColor = "black";
            document.getElementById('organs_title').style.color = "white";
        }
        else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }
    else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    }
})