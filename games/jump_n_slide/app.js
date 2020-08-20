document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character');
    let bottom = 0
    let gravity = 0.9
    let isJumping = false
    let isGoingLeft = false
    let isGoingRight = false
    let right = 0
    let left = 0


    function jump() {
        if (isJumping) return
        let timerUpId = setInterval(() => {
            if (bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval(() => {
                    if (bottom < 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }
                    bottom -= 5
                    prince.style.bottom = bottom + 'px'
                }, 20)
            }
            isjumping = true
            bottom += 30
            bottom = bottom * gravity
            prince.style.bottom = bottom + 'px'
        }, 20)
    }
    function slideLeft() {
        isGoingLeft = true
        let leftTimerId = setInterval(() => {
            left -= 5
            console.log('going left')
            prince.style.left = left + 'px'
        }, 20)
        left -= 5
        prince.style.left = left + 'px'
    }
    function slideRight() {
        isGoingRight = true
        let rightTimerId = setInterval(() => {
            left += 5
            console.log('going right')
            prince.style.left = left + 'px'
        }, 20)
        left -= 5
        prince.style.left = left + 'px'
    }
    function control(e) {
        if (e.keyCode === 38) {
            jump()
        } else if (e.keyCode === 37) {
            slideLeft()
        } else if (e.keyCode === 39) {
            slideRight()
        }
    }
    document.addEventListener('keydown', control)
})