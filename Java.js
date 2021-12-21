function menu_show() {
    document.querySelector("#menu").style.transform = "translate(0)";
    document.querySelector("#menu").style.display = "flex";
}

function menu_hide() {
    document.querySelector("#menu").style.transform = "translate(110%)";
    setTimout(() => {
        document.querySelector("#menu").style.display = "none";
    }, 300);
}

afterSlideLoad: function  (section, origin, destination, direction) {
    console.log(this);
}