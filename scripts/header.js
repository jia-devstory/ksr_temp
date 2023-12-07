window.addEventListener("load", () => {

    let toggleHeaderH = false;


    window.addEventListener("scroll", (e) => {
        if (e.currentTarget.scrollY > 150) {
            toggleHeaderH = true;
        } else {
            toggleHeaderH = false;
        }

        const toolbar = document.querySelector("header > .toolbar");

        if (toggleHeaderH) {
            toolbar.classList.add("disabled");
        } else {
            toolbar.classList.remove("disabled");
        }
    })
})
