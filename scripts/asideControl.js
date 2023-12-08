window.addEventListener("load", () => {
    const openBtn = document.querySelector("header .open-aside");
    const blurBox = document.querySelector(".blur");
    const asideMenu = document.querySelector("aside");

    openBtn.addEventListener("click", () => {
        if (asideMenu.classList.contains("on")) {
            return
        } else {
            asideMenu.classList.add("on");
            blurBox.classList.add("on");
            blurBox.animate({opacity: [0, 1]}, {
                duration: 300,
                easing: "ease",
                fill: "forwards"
            });
        }
    });

    const closeAction = () => {
        if (asideMenu.classList.contains("on")) {
            blurBox.animate({opacity: [1, 0]}, {
                duration: 300,
                easing: "ease",
                fill: "forwards"
            });
            setTimeout(()=> {
                blurBox.classList.remove("on");
            }, 300);
            asideMenu.classList.remove("on");
        }
    };

    blurBox.addEventListener("click", () => {
        closeAction();
    });
})
