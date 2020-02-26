let board = [];
let data = "";
function init() {
    for (let i = 0; i < 20; i++) {
        board[i]=[];
        for (let j = 0; j < 20; j++) {
            board[i][j] = 0;
        }
    }
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            data += board[i][j] + " ";
        }
        data += "<br>";
    }
    document.getElementById('carogame').innerHTML = data;
}

function changeValue() {
    let data = "";
    let xCoordinate = prompt("X: ");
    let yCoordinate = prompt("Y: ");
    board[xCoordinate][yCoordinate] = "x";
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            data += board[i][j] + "  ";
        }
        data += "<br>"
    }
    document.getElementById('carogame').innerHTML = data;
}

window.onload = init();