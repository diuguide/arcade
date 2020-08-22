document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'green',
        'purple',
        'blue',
    ]
    function createBoard() {
        for (let i= 0; i < width * width; i++) {
            const square = createElement('div')
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
})