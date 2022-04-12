const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const name= document.querySelectorAll(".name");
const email= document.querySelectorAll(".email");
const password= document.querySelectorAll(".password");
const submit = document.querySelectorAll(".submit");
const search = document.querySelector("#nearby");
// console.log(search);

// search.addEventListener("click,", fill());

// function fill(){
//     console.log("aaa");
//     document.querySelector(".all-events").innerHTML = '';
// }

// submit.addEventListener("click", (e)=>{
//     e.preventDefault();
//     db.collection('contactForm').doc().set({
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     }).then(()=> {
//         contactForm.reset();
//     })
// })

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
})

toggle_btn.forEach(btn => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
})

function moveSlider() {
    let index = this.dataset.value;
    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach(img => img.classList.remove("show"));
    currentImage.classList.add("show");
    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${(index - 1) * -2.2}rem)`;
    bullets.forEach(bull => bull.classList.remove("active"));
    this.classList.add("active")
}

bullets.forEach(bullet => {
    bullet.addEventListener("click", moveSlider)
})


