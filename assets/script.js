// ### get the matrix container div
const matrix = document.querySelector('.container');

// ### create the function to create each block
    // function: createBlock
        // create a div element
        // give classList.add = block
        // append the div element to the matrix
function createBlock() {
    let block = document.createElement('div');
    block.classList.add('block');
    matrix.appendChild(block);
}



// ### create the matrix using a for loop to generate the required number of blocks.
    // For let i = 1; i <= 4; i++
        // for let j = 1; j <= 4; j++
            // createDiv
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <=4; j++) {
        createBlock();
    }
}

// ### get the user's click on the matrix and call the function changeBlockColor
// matrix.addEventListener('mousedown', changeBlockColor);
matrix.addEventListener('mousedown', changeBlockColor)

// ### create the following function: it receives a divElement as parameter. 
    // what it does: change the backgroundColor of the div to black

function changeBlockColor(event) {
    console.log(event.target);
    let block = event.target;
    block.classList.toggle('black');

}