document.querySelectorAll("[data-sound]").forEach((el) => {
    el.addEventListener("mousedown", () => {
        playSound(el.dataset.sound);
    });
    if ('enablePause' in el.dataset) {
        el.addEventListener("mouseup", () => {
            stopSound(el.dataset.sound, 'enableRestart' in el.dataset);
        });
    }
});

const playSound = (fileName) => {
    const audio = document.getElementById(fileName);
    audio.play();
};

const stopSound = (fileName, enableRestart) => {
    const audio = document.getElementById(fileName);
    audio.pause();
    if (enableRestart)
        audio.currentTime = 0;
};