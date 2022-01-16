var result = document.getElementById("result");
var input = document.getElementById("input");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var theme = document.getElementById("theme");
var slider = document.getElementById("slider");

btn1.addEventListener("click", () => {
    result.innerText = window.btoa(input.value);
    localStorage.setItem("value", result.value);

});
btn2.addEventListener("click", () => {
    result.innerText = window.atob(result.value);
    localStorage.setItem("input_value", input.value);
});

btn3.addEventListener("click", () => {
    result.innerText = "";
    input.value = "";
    localStorage.removeItem("value");
    localStorage.removeItem("input_value");
});

input.addEventListener("change", () => {
    result.innerText = btoa(input.value);
});

slider.addEventListener("click",()=>{
    theme.click();
});


class Theme {
    constructor() {
        this.darkMode();
    }
    darkMode() {
        theme.classList.toggle("theme");
        slider.classList.toggle("theme");
        document.body.classList.toggle("theme");
        if (document.body.getAttribute("class") === "theme") {
            localStorage.setItem("dark_mode", "true");     
        } else {
            localStorage.setItem("dark_mode", "false");
        }
    }
}

theme.addEventListener("click", () => {
    const theme = new Theme();
});

// theme.addEventListener("click", () => {
//     document.body.classList.toggle("theme");
//     document.querySelector("p").classList.toggle("theme");
//     if (document.body.getAttribute("class") === "theme") {
//         localStorage.setItem("dark_mode", "true");
//     } else {
//         localStorage.setItem("dark_mode", "false");
//     }
// });




// document.body.addEventListener("keypress", (e) => {
//     console.log(e.code)
// if (e.code === "Space") {
//     window.location.reload();
// }
// });

onload = () => {
    // btn3.click();
    // btn4.click();
    input.focus();
    result.innerText = localStorage.getItem("value");
    input.value = localStorage.getItem("input_value");
    if (localStorage.getItem("dark_mode") === "true") {
        theme.click();
    }
};

