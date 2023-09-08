$(document).ready(function () {

    // Carrossel EPISODES
    $('#myCarousel').owlCarousel({
    items: 3, // Number of cards shown in each slide
    loop: true, // Continuously loop the carousel
    margin: 20, // Space between cards
    nav: true, // Show navigation buttons
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
    ], // Custom navigation icons
    responsive: {
        0: {
        items: 1, // Number of cards shown in the carousel for smaller screens
        },
        768: {
        items: 2, // Number of cards shown in the carousel for medium screens
        },
        992: {
        items: 3, // Number of cards shown in the carousel for large screens
        },
    },
    });
    
    setInterval(function () {
        let nextBtn = document.querySelector(".fa-chevron-right").click();
    }, 10000);

    // Change vídeo on clique slider
    const iframeVideo = document.getElementById("iframeVideo");
    let episode1 = document.getElementById("episode1");
    let episode2 = document.getElementById("episode2");

    episode1.addEventListener("click", ()=> {
    iframeVideo.setAttribute("src", "https://www.youtube.com/embed/RvZFYE5jo1M?si=Omp__0gFGSGJ01Gn");
    });
    
    episode2.addEventListener("click", ()=> {
    iframeVideo.setAttribute("src", "https://www.youtube.com/embed/kSVqPAN1nCM?si=tD-IViyGJ5PeXP_V");
    });

});