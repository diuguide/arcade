document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character');
    let bottom = 300
    let gravity = 0.99
    let parachute = 1.1
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

            if (bottom > 300) {

                clearInterval(timerUpId)

                let timerDownId = setInterval(() => {
                    console.log(bottom)
                    if (bottom <= 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }

                    bottom -= 3
                    bottom = bottom * parachute
                    prince.style.bottom = bottom + 'px'

                }, 20)
            }

            isjumping = true
            bottom += 1
            bottom = bottom * gravity
            prince.style.bottom = bottom + 'px'

        }, 2)

        console.log(bottom)
    }
    function slideLeft() {
        prince.classList.add('character-slide')
        prince.classList.remove('character')
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval(() => {
            left -= 5
            console.log('going left')
            prince.style.left = left + 'px'
        }, 20)
        clearInterval(leftTimerId)
        left -= 5
        prince.style.left = left + 'px'
        console.log('left' + bottom)
    }
    function slideRight() {
        prince.classList.add('character-slide')
        prince.classList.remove('character')
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true


        rightTimerId = setInterval(() => {
            if (left === 500) {
                clearInterval(rightTimerId)
            }
            left += 20
            left = left * gravity
            console.log('going right')
            prince.style.left = left + 'px'
            if (bottom < 100) { clearInterval(rightTimerId) }
        }, 20)
        console.log(bottom)


        left += 5
        prince.style.left = left + 'px'
        console.log('right' + bottom)
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
    console.log('bottom' + bottom)
    document.addEventListener('keydown', control)
})