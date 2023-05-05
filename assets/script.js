// ### get the matrix container div
const matrix = document.querySelector('.container');

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
function render() {
    let size = 10;
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            createBlock(size);
        }
    }
}

render();

// ############### get the user's click on the matrix and call the function changeBlockColor
// matrix.addEventListener('mousedown', changeBlockColor);

// If mouseleave, then remove the mousedown eventListener


// ### if the mousedown event type is on, then active the  eventListener for 'mouseover' and call the changeBlockColor function.
matrix.addEventListener('mousedown', () => {
    matrix.addEventListener('mouseover', changeBlockColor);
});

// ######### if mouse is down, changeBlockColor. // This was added to call the function as soon as the mouse is down.
matrix.addEventListener('mousedown', changeBlockColor);

matrix.addEventListener('mouseup', () => {
    matrix.removeEventListener('mouseover', changeBlockColor);
});

// ### create the following function: it receives a divElement as parameter. 
    // what it does: change the backgroundColor of the div to black

function changeBlockColor(event) {

        let block = event.target;
        block.classList.toggle('black');
}