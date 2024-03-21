const myDiv = document.getElementById('move');

let intervalId;

function moveLeft() {
    let leftPos = parseInt(myDiv.style.left) || 0;
    myDiv.style.left = leftPos - 50 + 'px';
}

function moveRight() {
    let leftPos = parseInt(myDiv.style.left) || 0;
    myDiv.style.left = leftPos + 50 + 'px';
}

function moveUp() {
    let topPos = parseInt(myDiv.style.top) || 0;
    myDiv.style.top = topPos - 50 + 'px';
}

function moveDown() {
    let topPos = parseInt(myDiv.style.top) || 0;
    myDiv.style.top = topPos + 50 + 'px';
}

function moveTopLeft() {
    moveLeft();
    moveUp();
}

function moveTopRight() {
    moveRight();
    moveUp();
}

function moveBottomLeft() {
    moveLeft();
    moveDown();
}

function moveBottomRight() {
    moveRight();
    moveDown();
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'a':
            moveLeft();
            break;
        case 'd':
            moveRight();
            break;
        case 'w':
            moveUp();
            break;
        case 's':
            moveDown();
            break;
        case 'wa':
            moveTopLeft();
            break;
        case 'wd':
            moveTopRight();
            break;
        case 'sa':
            moveBottomLeft();
            break;
        case 'sd':
            moveBottomRight();
            break;
    }
});

document.addEventListener('keyup', function(event) {
    clearInterval(intervalId);
});