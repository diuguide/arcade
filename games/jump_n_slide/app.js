document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character');
    let bottom = 0
    let gravity = 0.8
    let isJumping = false
    let isGoingLeft = false
    let isGoingRight = false
    let right = 0
    let left = 0
    let rightTimerId
    let leftTimerId


    function jump() {

        if (isJumping) return

        prince.classList.add('character')
        prince.classList.remove('character-slide')

        let timerUpId = setInterval(() => {
            let count = 0
            if (bottom > 325) {

                clearInterval(timerUpId)

                let timerDownId = setInterval(() => {

                    if (bottom < 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }

                    bottom -= 20
                    prince.style.bottom = bottom + 'px'

                }, 20)
            }

            isjumping = true
            bottom += 100
            bottom = bottom * gravity
            prince.style.bottom = bottom + 'px'

        }, 20)

    }
    // function slideLeft() {
    //     prince.classList.add('character-slide')
    //     prince.classList.remove('character')
    //     if (isGoingRight) {
    //         clearInterval(rightTimerId)
    //         isGoingRight = false
    //     }
    //     isGoingLeft = true
    //     leftTimerId = setInterval(() => {
    //         left -= 5
    //         console.log('going left')
    //         prince.style.left = left + 'px'
    //     }, 20)
    //     left -= 5
    //     prince.style.left = left + 'px'
    // }
    // function slideRight() {
    //     prince.classList.add('character-slide')
    //     prince.classList.remove('character')
    //     if (isGoingLeft) {
    //         clearInterval(leftTimerId)
    //         isGoingLeft = false
    //     }
    //     isGoingRight = true
    //     rightTimerId = setInterval(() => {
    //         left += 5
    //         console.log('going right')
    //         prince.style.left = left + 'px'
    //     }, 20)
    //     left -= 5
    //     prince.style.left = left + 'px'
    // }
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