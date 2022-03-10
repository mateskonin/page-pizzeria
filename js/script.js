let navbar = document.querySelector('.navbar');
let info = document.querySelector('.info');
let showBlog = document.querySelectorAll('.show-blog');
let btnMenu = document.querySelector('#menu-btn')
let btnShow = document.querySelector("#show-btn")
let btnsBlog = document.querySelectorAll(".blog-btn")
let btnsClose = document.querySelectorAll(".close-btn")

btnMenu.onclick = () => {
    navbar.classList.toggle('active');
}

btnShow.onclick = () => {
    info.classList.toggle('active');
}

for (let i = 0; i < btnsBlog.length; i++) {
    btnsBlog[i].onclick = () => {
        showBlog[i].classList.add("active")
    }
    btnsClose[i].onclick = () => {
        showBlog[i].classList.remove("active")
    }
}


window.onscroll = () => {
    navbar.classList.remove('active');
}