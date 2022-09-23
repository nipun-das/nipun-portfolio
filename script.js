var icon = document.getElementById("night-icon");
var photo = document.getElementsByClassName("dp");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/light-icon.png";
        dp.src = "images/prof-photo-dark.jpg"
    } else {
        icon.src = "images/night-mode.png";
        dp.src = "images/prof-photo.jpg"
    }
}

