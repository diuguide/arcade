document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character');
    let bottom = 0



    function jump() {
        let timerUpId = setInterval(() => {

            if (bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval(() => {
                    if(bottom < 0) {
                        clearInterval(timerDownId)
                    }
                    bottom -= 5
                    prince.style.bottom = bottom + 'px'
                }, 20)
            }
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