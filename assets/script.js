// ### get the matrix container div
const matrix = document.querySelector('.drawingBox');

// ### create the function to create each block
    // function: createBlock
        // create a div element
        // give classList.add = block
        // append the div element to the matrix

function createBlock(size) {
    let block = document.createElement('div');
    block.classList.add('block');
    
    let blockSize = `${400 / size}px`;
    block.style.width = blockSize;
    block.style.height = blockSize;
    block.style.backgroundColor = 'white';
    matrix.appendChild(block);
}


// ## create function that delete all the elements inside of the matrix 
function removeBlocks(parentElement) {
    while(parentElement.firstChild)
        parentElement.removeChild(parentElement.firstChild);
}

function renderMatrix(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            createBlock(size);
        }
    }
}

function newGrid(size) {
    removeBlocks(matrix);
    renderMatrix(size);
}


// ############### get the user's click on the matrix and call the function changeBlockColor
// matrix.addEventListener('mousedown', changeBlockColor);



// ### if the mousedown event type is on, then active the  eventListener for 'mouseover' and call the changeBlockColor function.
matrix.addEventListener('mousedown', () => {
    matrix.addEventListener('mouseover', changeBlockColor);
});

// ######### if mouse is down, changeBlockColor. // This was added to call the function as soon as the mouse is down.
matrix.addEventListener('mousedown', changeBlockColor);

// If mouse is up, remove the mousedown eventListener, not calling the function changeBlockColor
matrix.addEventListener('mouseup', () => {
    matrix.removeEventListener('mouseover', changeBlockColor);
});

// If mouseleave, then remove the mousedown eventListener, not calling the function changeBlockColor
matrix.addEventListener('mouseleave', () => {
    matrix.removeEventListener('mouseover', changeBlockColor);
});

// ### create the following function: it receives a divElement as parameter. 
// what it does: change the backgroundColor of the div to black

// kinda working
const inputColor = document.querySelector('#inputColorPicker');
function changeBlockColor(event) {
    let block = event.target;
    let newColor = inputColor.value;
    if (block.style.backgroundColor != 'white') {
        block.style.backgroundColor = 'white';
    } else if (block.style.backgroundColor == 'white') {
        block.style.backgroundColor = newColor;
    }

    
}



// ################# FEATURE: slider range
    // 1. - get the inputSlider value
const inputSlider = document.querySelector('#inputSlider');
// 2. - get the output field
const outputField = document.querySelector('#sliderValue');
// 3. - add eventListener to the slider
inputSlider.addEventListener('input', (e) => {
    console.log('mudou o valor do input');
    size = inputSlider.value
    outputField.innerText = `Grid Layout: ${size} X ${size}`;
    newGrid(size);
    

})
    // 4. - update the output based on the value


    renderMatrix(16);