const NAV_HIDDEN_CLASS = "nav-hidden";

let lastScrollY = 0;
let ticking = false;

/**
 * @param {HTMLElement} nav
 */
function updateNav(nav)
{
    if (IsScrollingDown())
    {
        nav.classList.add(NAV_HIDDEN_CLASS);
    }
    else
    {
        nav.classList.remove(NAV_HIDDEN_CLASS);
    }

    lastScrollY = window.scrollY;
}

function IsScrollingDown()
{
    return window.scrollY > lastScrollY && scrollY > 50;
}

function setup()
{
    const nav = document.querySelector("nav");
    if (nav)
    {
        addEventListener("scroll", () => updateNav(nav));
    }
}

setup();