/* Mobile navigation (hamburger) - shared by index / home / menu / contact pages */
(function () {
    var btn = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!btn || !nav) return;

    function setOpen(open) {
        nav.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        setOpen(!nav.classList.contains("open"));
    });

    // close after choosing a link
    nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { setOpen(false); });
    });

    // close when tapping outside / pressing Esc / going back to desktop size
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) setOpen(false);
    });
})();
