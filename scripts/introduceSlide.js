window.addEventListener("load", () => {

    const introduce = new Swiper("main > .introduce .swiper", {
        simulateTouch: true,
        pagination: {
            el: ".introduce .swiper-pagination",
            type: "progressbar"
        },
        navigation: {
            prevEl: ".introduce .prev",
            nextEl: ".introduce .next"
        }
    })
})
