// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Behance Likes Interaction
const btnLike = document.getElementById('btn-like');
const likeCountSpan = document.getElementById('like-count');

if (btnLike && likeCountSpan) {
    let likes = parseInt(localStorage.getItem('danilo_portfolio_likes')) || 148;
    let liked = localStorage.getItem('danilo_portfolio_liked') === 'true';

    // Update initial view
    likeCountSpan.textContent = likes;
    if (liked) {
        btnLike.classList.add('active');
        btnLike.innerHTML = `<i class='bx bxs-hand'></i> Curtiu! (${likes})`;
    }

    btnLike.addEventListener('click', () => {
        if (!liked) {
            likes++;
            liked = true;
            btnLike.classList.add('active');
            btnLike.innerHTML = `<i class='bx bxs-hand'></i> Curtiu! (${likes})`;
        } else {
            likes--;
            liked = false;
            btnLike.classList.remove('active');
            btnLike.innerHTML = `<i class='bx bxs-hand'></i> Curtir Projeto (${likes})`;
        }
        likeCountSpan.textContent = likes;
        localStorage.setItem('danilo_portfolio_likes', likes);
        localStorage.setItem('danilo_portfolio_liked', liked);
    });
}