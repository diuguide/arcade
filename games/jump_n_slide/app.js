document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character');
    let bottom = 0



    function jump() {
        let timerId = setInterval(() => {
            bottom += 30
            prince.style.bottom = bottom + 'px'
        }, 20)
    }
    function control(e) {
        if (e.keyCode === 38) {
            jump()
        }
    }
    document.addEventListener('keydown', control)
})