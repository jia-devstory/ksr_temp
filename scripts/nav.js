window.addEventListener("load", () => {
    const navBtn = document.querySelectorAll("header nav > a");

    for (let btn of navBtn) {
        btn.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) {
                return
            } else {
                document.querySelector("nav > .active").classList.remove("active");
                e.target.classList.add("active");
            }
        });
    }

    for (let btn of navBtn) {
        const alert = document.querySelectorAll(".alert");

        btn.addEventListener("click", (e) => {
            if (e.target === navBtn[0]) {
                return
            } else if (e.target === navBtn[1]) {
                alert[0].classList.add("active");
            } else {
                alert[1].classList.add("active");
            }
        })
    }

    const closeAlert = document.querySelectorAll(".alert .close");

    for (let close of closeAlert) {
        close.addEventListener("click", (e) => {
            e.target.closest(".alert").classList.remove("active");
            for (let btn of navBtn) {
                btn.classList.remove("active");
            }
            navBtn[0].classList.add("active");
        });
    }
})
