// 성적을 계산하는 함수
function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var input = prompt(subjects[i] + " 점수를 입력하세요.");

        if (input === null) {
            alert("성적 입력을 취소하셨습니다.");
            return;
        }

        var score = parseInt(input);

        if (isNaN(score) || score < 0 || score > 100) {
            alert("0부터 100 사이의 올바른 숫자를 입력해 주세요!");
            i--;
            continue;
        }

        total += score;
    }

    var average = total / subjects.length;
    var resultText = "";

    if (average >= 60) {
        resultText = "🎉 합격입니다!";
        if (average >= 80) {
            resultText += " 우수자로 선정되었습니다.";
        }
    } else {
        resultText = "😢 60점 미만으로 불합격입니다.";
    }

    var resultMessage = "====== 📊 성적 결과표 ======\n" +
                        "- 총점: " + total + "점\n" +
                        "- 평균: " + average.toFixed(1) + "점\n\n" + 
                        "- 결과: " + resultText;
    
    alert(resultMessage);
}