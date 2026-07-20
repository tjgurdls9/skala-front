function showMyBag() {
    var myBag = [
        { name: "에어팟 🎧", count: 1 },
        { name: "스마트폰 📱", count: 1 },
        { name: "지갑 💳", count: 1 },
        { name: "수첩 📕", count: 1 },
        { name: "필통 🖊️", count: 1 }
    ];

    var resultText = "👜 [내 가방 속 물품 목록]\n";
    resultText += "-------------------------\n";

    for (var i = 0; i < myBag.length; i++) {
        resultText += "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }

    resultText += "-------------------------\n";
    
    resultText += "총 물품 종류: " + myBag.length + "가지";

    alert(resultText);
}