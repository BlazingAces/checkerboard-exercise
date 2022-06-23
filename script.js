// Goal make a Checkerboard
//  Make seperate squares (64 on a checkboard)
//      Each tile should be a div
//      Each tiles's width is 11.1%
//      Set each tile's float property to left
//      Each tile's paddingBottom is 11.1%

// let body = document.body; //Use getElementsByTagName to get the body tag. Can add [0] if they is more then one of the same tag

// function checkerBoard() {
//     for (var i = 0; i < 63; i++) {
//         let square = document.createElement('div') 
//         square.style.width = "11%";
//         square.style.float = "left";
//         square.style.paddingBottom = "11%";
//         document.body.append(square);


//     if (i % 2 !== 0) {
//         square.style.backgroundColor = 'red';
//     } else {
//         square.style.backgroundColor = 'black';
//         }
//     }
// }

// checkerBoard();

let body = document.body;

function randomColor() {

for (var i = 0; i < 63; i++) {
    let randomOne = Math.ceil(Math.random() * 255)
    let randomTwo = Math.ceil(Math.random() * 255)
    let randomThree = Math.ceil(Math.random() * 255)
    let square = document.createElement('div') 
    square.style.width = "11.1%";
    square.style.float = "left";
    square.style.paddingBottom = "11.1%";
    document.body.append(square);
    square.style.background = `rgb(${randomOne},${randomTwo},${randomThree})`;
    // console.log(randomColorOne);


// if (i % 2 !== 0) {
//     square.style.backgroundColor = rgbA;
// } else {
//     square.style.backgroundColor = rgbA;
//     }
 }
}

randomColor();