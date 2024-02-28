document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('nav');
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.querySelector('.container').classList.remove('red-border');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.querySelector('.container').classList.add('red-border');


        }
    });
});
const menu = document.querySelector(".navbar");
let botonColapsado= document.querySelector('.navbar-collapse');
const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

let botonCheck=  document.getElementById('btn-check');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const menuLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
            let linkActivos= document.querySelector(".navbar-nav a.active");

            if (entry.isIntersecting) {
                linkActivos.classList.remove("active");
                menuLink.classList.add("active");
            }
        });
    },
    { rootMargin: "-30% 0px -70% 0px" }
);
const closeMavbar = () => {
    botonColapsado.classList.remove('show');
};





menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function () {
        closeMavbar();
        menu.classList.remove(".navbar-collapse-custom");
        botonCheck.checked = false;
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});


document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        // Agrega un temporizador para ocultar el spinner después de 3 segundos (ajusta según sea necesario)
        setTimeout(function () {
            document.querySelector('.spinner-container').style.display = 'none';

        }, 1000); // 3000 milisegundos = 3 segundos
    }
};
const toggleButton = document.getElementById('toggleButton');
const imageContainer = document.getElementById('imageContainer');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', function() {
    imageContainer.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    imageContainer.style.display = 'none';
});

function closeImage() {
    imageContainer.style.display = 'none';
}


document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src= e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

