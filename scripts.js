document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
        loop: true, 
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, 
        },
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev",
        }
    });
});

function updateProgress() {
    let fields = document.querySelectorAll("#form1 input");
    let filled = Array.from(fields).filter(input => input.value.trim() !== "").length;
    let total = fields.length;
    let progress = (filled / total) * 100;
    document.getElementById("progressbar").style.width = progress + "%";
}