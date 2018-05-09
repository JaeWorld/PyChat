function printStar(){
    var ret = prompt("정수를 입력하세요.", "");
    if(isNaN(ret) == true){
        document.write("입력 오류 입니다.");
    }
    else{
        for(var i=1; i<=ret; i++){
            var star = "";
            for(var j=0; j<i; j++){
                star += "*";
            }
            document.write(star, "<br>");
        }
    }
}