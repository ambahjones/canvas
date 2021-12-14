let canvasInputs = document.querySelectorAll('input[name="sizes"]');
let paintColor = document.querySelector('input[name="chooseColor"]');
let clearCanvas = document.querySelector('.clear');
let eraser = document.querySelector('.erase');
let draw = document.querySelector('.draw');
let squaresToPaint;


canvasInputs.forEach((input) => {
    input.addEventListener('click', () => {
        let canvasSize = input.value;
        let sqsPerSide = canvasSize.toString();
        let squares;

        switch(sqsPerSide) {
            case '16x16':
                squares = 16;
                break;
            case '32x32':
                squares = 32;
                break;
            case '64x64':
                squares = 64;
                break;
        }

        //clearBoard();
        createCanvas(squares);
    })
})

function createCanvas(num) {
    let canvas = document.querySelector(".frame");
    let canvasArea = num **2;

    switch(num) {
        case 16:
            clearBoard();
            canvas.classList.add("canvas16");
            canvas.classList.remove("canvas32");
            canvas.classList.remove("canvas64");
            break;
        case 32:
            clearBoard();
            canvas.classList.add("canvas32");
            canvas.classList.remove("canvas16");
            canvas.classList.remove("canvas64");
            break;
        case 64:
            clearBoard();
            canvas.classList.add("canvas64");
            canvas.classList.remove("canvas16");
            canvas.classList.remove("canvas32");
            break;
    }

    for(let i = 0; i < canvasArea; i++) {
        //create new element within loop to populate canvas
        let gridDiv = document.createElement("div");
        gridDiv.classList.add('canvasSquare');
        //adds squares to array for access later
        canvas.appendChild(gridDiv);
    }

    //once canvas is created need to change background color of squares onmouseover
    changeColor(`${paintColor.value}`);
}

function changeColor(color) {
    squaresToPaint = document.querySelectorAll('.canvasSquare');
    squaresToPaint.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `${color}`;
        });
    });
}

draw.addEventListener('click', () => {
    changeColor(`${paintColor.value}`);
})

//changes "brush" color on color picker input
paintColor.addEventListener('input', () => {
    let newColor = paintColor.value;
    let newColorname = newColor.toString();
    changeColor(newColorname);
});

eraser.addEventListener('click', () => {
    changeColor('#ffffff');
})

function clearBoard() {
    squaresToPaint = document.querySelectorAll('.canvasSquare');
    squaresToPaint.forEach((square) => {
        square.style.backgroundColor = '#ffffff';
    });
}

clearCanvas.addEventListener('click', clearBoard);

//initiates with 16x16 canvas and black
function initiateCanvas() {
    let info;
    let string;
    let value;
    for(i=0; i < canvasInputs.length; i++) {
        if(canvasInputs[i].checked) {
            info = canvasInputs[i].value;
            string = info.toString();
            if(string == '16x16') {
                value = 16;
                createCanvas(value);
            }
        }

    }
    changeColor(`${paintColor.value}`);
}
initiateCanvas();