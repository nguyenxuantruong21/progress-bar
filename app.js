const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const h2 = document.querySelector("h2");
const span = document.querySelector('span')

let isDragging = false;

progress.addEventListener('click', function (e) {
    const process = e.pageX - this.offsetLeft
    let percent = (process / this.offsetWidth) * 100
    percent = Math.ceil(percent)
    progressBar.style.width = `${percent}%`
    h2.innerHTML = `${percent}%`
})

progressBar.addEventListener('mousedown', function (e) {
    isDragging = true;
});

progress.addEventListener('mousemove', (e) => {
    if (isDragging) {
        progress.addEventListener('mousemove', function (e) {
            const process = e.pageX - this.offsetLeft
            let percent = (process / this.offsetWidth) * 100
            percent = Math.ceil(percent)
            progressBar.style.width = `${percent}%`
            h2.innerHTML = `${percent}%`
        })
    }
});

progressBar.addEventListener('mouseup', function (e) {
    isDragging = false;
});