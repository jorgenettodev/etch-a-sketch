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
    matrix.appendChild(block);
}



// ### create the matrix using a for loop to generate the required number of blocks.
    // For let i = 1; i <= 4; i++
        // for let j = 1; j <= 4; j++
            // createDiv

// function: render the blocks inside of the grid flexbox-container. The height and width of each block will be the size of the grid / number of rows/columns    
const inGridSize = document.querySelector('#inputGridSize');
const btnGridSize = document.querySelector('#btnGridSize');


// ############## FEATURE: Change the grid layout based on the user input.
// ################ get the input Value, though changing the grid Layout
btnGridSize.addEventListener('click', (e) => {
    let size = inGridSize.value;
    if (size > 100) {
        alert('It cannot be greater than 100');
        return;
    }
    removeBlocks(matrix);
    renderMatrix(size);
});


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

renderMatrix(16);

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

function changeBlockColor(event) {
        let block = event.target;
        block.classList.toggle('black');
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

