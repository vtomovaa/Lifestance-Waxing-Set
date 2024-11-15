// accordion

let acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// restart video

const video = document.getElementById("myVideo");

video.addEventListener('ended', function () {
    // Restart the video when it ends
    video.currentTime = 0;
    video.play();
});