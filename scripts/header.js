window.addEventListener("load", () => {

    let toggleHeaderH = false;


    window.addEventListener("scroll", (e) => {
        if (e.currentTarget.scrollY > 100) {
            toggleHeaderH = true;
        } else {
            toggleHeaderH = false;
        }

        const toolbar = document.querySelector("header > .header-inner > .toolbar");

        if (toggleHeaderH) {
            toolbar.classList.add("disabled");
        } else {
            toolbar.classList.remove("disabled");
        }
    })
})
