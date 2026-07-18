// 게임을 실행하는 함수
function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;
    var isCorrect = false;

    while (!isCorrect) {
        var userInput = prompt("1부터 50 사이의 숫자를 맞춰보세요!");

        if (userInput === null) {
            alert("게임을 종료합니다.");
            break;
        }

        var userNum = parseInt(userInput);
        count++;

        if (isNaN(userNum) || userNum < 1 || userNum > 50) {
            alert("1부터 50 사이의 올바른 숫자를 입력해 주세요!");
            count--;
            continue;
        }

        if (userNum > computerNum) {
            alert("Down!");
        } else if (userNum < computerNum) {
            alert("Up!");
        } else {
            alert("축하합니다! " + count + "번 만에 맞추셨습니다. 🎉");
            isCorrect = true;
        }
    }
}