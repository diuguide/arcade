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
        'blue'
    ]

    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('draggable', true)
            square.setAttribute('id', i)
            let randomColor = Math.floor(Math.random() * candyColors.length)
            square.style.backgroundColor = candyColors[randomColor]
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        console.log('first click ' + colorBeingDragged)
        squareIdBeingDragged = parseInt(this.id)



    }
    function dragOver(e) {
        e.preventDefault()


    }
    function dragEnter(e) {
        e.preventDefault()


    }
    function dragLeave() {


    }
    function dragEnd() {


    }
    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        squares[squareIdBeingReplaced].style.backgroundColor = colorBeingDragged
        console.log('after ' + colorBeingReplaced)


    }










})