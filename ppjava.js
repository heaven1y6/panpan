
function setUpPopupListeners(popupID, creamID) {
    const popup = document.getElementById(popupID);
    const cream = document.getElementById(creamID);

    if (!popup || !cream)
        return

    // Click cream -> open pop up
    cream.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    // Click anywhere except cream and pop up to close pop up
    document.addEventListener('click', event => {
        if (
            !popup.classList.contains('hidden')
            && !popup.contains(event.target)
            && !cream.contains(event.target)
        ) {
            popup.classList.add('hidden');
        };
    });
};

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].forEach((letter) => {
    setUpPopupListeners(`Stat${letter}`, `cream${letter}`);
})

window.addEventListener('load', () => {
    document.querySelectorAll(".funtime").forEach((el) => {
        document.body.appendChild(el);
        el.style.top  = `max(10px, min(calc(100% - ${el.offsetHeight + 12}px), ${Math.round(Math.random() * 100)}%))`;
        el.style.left = `max(10px, min(calc(100% - ${el.offsetWidth + 12}px), ${Math.round(Math.random() * 100)}%))`;
    });
})