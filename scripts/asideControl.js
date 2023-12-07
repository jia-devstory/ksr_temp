window.addEventListener("load", () => {
    const aside = document.querySelector("aside");
    const asideOn = document.querySelector("header > .header-content > .toggle-wrapper > .toggle");


    asideOn.addEventListener("click", () => {
        aside.animate({left: ["-100%", 0]}, {
            duration: 300,
            easing: "ease",
            fill: "forwards"
        });
        aside.animate([{background: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0)"}, {background: "rgba(0, 0, 0, .6)", backdropFilter: "blur(.25rem)"}], {
            delay: 300,
            duration: 300,
            easing: "ease",
            fill: "forwards"
        })
    })
})
