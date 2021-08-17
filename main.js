function randFloat(min, max) {
    return min + (max - min) * Math.random();
};

function randInt(min, max) {
    return parseInt(randFloat(min, max));
};
var result = [];
var $player = $("#player");
var $computer = $("#resultCom");
var $result = $("#result");
//點擊剪刀
function clickScissor() {
    resultA = randInt(0, 3);
    console.log(resultA);
    if (resultA === 0) {
        $computer.text(`電腦：剪刀`);
        $player.text(`玩家：剪刀`);
        $result.text(`平手`);
    } else if (resultA === 1) {
        $computer.text(`電腦：石頭`);
        $player.text(`玩家：剪刀`);
        $result.text(`你輸了`);
    } else {
        $computer.text(`電腦：布`);
        $player.text(`玩家：剪刀`);
        $result.text(`你贏了`);
    }
}
//點擊石頭
function clickStone() {
    resultA = randInt(0, 3);
    console.log(resultA);
    if (resultA === 0) {
        $computer.text(`電腦：剪刀`);
        $player.text(`玩家：石頭`);
        $result.text(`你贏了`);
    } else if (resultA === 1) {
        $computer.text(`電腦：石頭`);
        $player.text(`玩家：石頭`);
        $result.text(`平手`);
    } else {
        $computer.text(`電腦：布`);
        $player.text(`玩家：剪刀`);
        $result.text(`你輸了`);
    }
}
//點擊布
function clickPaper() {
    resultA = randInt(0, 3);
    console.log(resultA);
    if (resultA === 0) {
        $computer.text(`電腦：剪刀`);
        $player.text(`玩家：布`);
        $result.text(`你輸了`);
    } else if (resultA === 1) {
        $computer.text(`電腦：石頭`);
        $player.text(`玩家：布`);
        $result.text(`你贏了`);
    } else {
        $computer.text(`電腦：布`);
        $player.text(`玩家：布`);
        $result.text(`平手`);
    }
}

// clickScissor();
// $("#scissor").click(function () {
//     resultA = randInt(0, 3);
//     console.log("剪刀");
//     if (resultA === 0) {
//         console.log("平手");
//     }
// });
// var resultPlayer = 2;
// if (resultA === resultPlayer) {
//     console.log(resultA);
//     console.log("平手");
// } else if (resultA === resultPlayer - 1) {
//     console.log(resultA);
//     console.log("你贏了");
// } else {
//     console.log(resultA);
//     console.log("你輸了");
// }