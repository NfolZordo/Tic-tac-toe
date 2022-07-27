'use strict';
let playingField = [0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,];
let player = 1;
let gameOver = false;
function getdetails(obj) {
    if (playingField [obj.id.toString().slice(-1) - 1] == 0 & !gameOver) {
        if (player == 1) {
            // document.getElementById(obj.id).style = 'background-image: url("./img/x.png");';
            document.getElementById(obj.id).innerHTML =  '<img class="image" src="./img/x.png">';
            playingField [obj.id.toString().slice(-1) - 1] = 1;
            result(playingField, player);
            player = 2; 
        }
        else {
            document.getElementById(obj.id).innerHTML =  '<img class="image" src="./img/o.png">';
            playingField [obj.id.toString().slice(-1) - 1] = 2;
            result(playingField, player);
            player = 1;
        }
    }
    console.log(playingField);
}
function result(playingField, player) {
    if (playingField [0] == player & playingField [1] == player & playingField [2] == player) {
        colorBackground(1,2,3);
    }
    else if (playingField [3] == player & playingField [4] == player & playingField [5] == player) {
        colorBackground(4,5,6);
    }    
    else if (playingField [6] == player & playingField [7] == player & playingField [8] == player) {
        colorBackground(7,8,9);
    }
    else if (playingField [0] == player & playingField [3] == player & playingField [6] == player) {
        colorBackground(1,4,7);
    }    
    else if (playingField [1] == player & playingField [4] == player & playingField [7] == player) {
        colorBackground(2,5,8);
    }
    else if (playingField [2] == player & playingField [5] == player & playingField [8] == player) {
        colorBackground(3,6,9);
    }
    else if (playingField [0] == player & playingField [4] == player & playingField [8] == player) {
        colorBackground(1,5,9);
    }
    else if (playingField [2] == player & playingField [4] == player & playingField [6] == player) {
        colorBackground(3,5,7);
    }
}
function colorBackground(element1, element2, element3) {
    console.log(element1.toString());
    gameOver = true;
    document.getElementById("btn-".concat(element1.toString())).style = 'background-color:blue;';
    document.getElementById("btn-".concat(element2.toString())).style = 'background-color:blue;';
    document.getElementById("btn-".concat(element3.toString())).style = 'background-color:blue;';
}
function resetGame() {
    location.reload();
}
    // playingField = [0, 0, 0,
    //                 0, 0, 0,
    //                 0, 0, 0,];
    // player = 1;
// for(area in document.getElementsByClassName("button")) {
//     area.style = 'background-color: brown;'
// }
// document.getElementsByClassName("button")[0].style = 'background-color: brown;'
//     for (let index = 1; index <= document.getElementsByClassName("button").length; index++) {
//         var element =  document.getElementById("btn-".concat(index.toString()));
//         var image = element.getElementsByClassName("image");
//         element.style = 'background-color:brown;';
//         element.removeChild(image);
//     }
// }
    // document.getElementsByClassName(obj.className)[0].style = 'background-image: url("./img/x.png");'
    // document.getElementsByClassName("button").array.forEach(element => {element.style = 'background-color: brown;'});
