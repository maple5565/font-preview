// 입력창 가져오기
const textInput = document.getElementById("textInput");

// 폰트 미리보기 10개 가져오기
const previewTexts = document.querySelectorAll(".preview-text");


// 입력창에 글자를 입력할 때마다 실행
textInput.addEventListener("input", function () {

    // 입력한 글자 가져오기
    const text = textInput.value;

    // 10개의 폰트에 똑같은 글자 넣기
    previewTexts.forEach(function (preview) {

        // 입력한 글자가 있으면 입력한 글자 표시
        if (text.trim() !== "") {
            preview.textContent = text;
        }

        // 아무것도 입력하지 않았다면 솜담소 표시
        else {
            preview.textContent = "솜담소";
        }

    });

});