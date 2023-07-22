let moveSlide = function(event) {
    if (event.target.tagName === "SPAN" || event.target.tagName === "INPUT") {

    let slides = Array.from(applicationCardsGroup);
    slides.forEach(item => item.classList.remove("active-card"));

        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (slide.dataset.id === event.target.id) {
                slide.classList.add("active-card"); 
            }
        }
    }
};     


