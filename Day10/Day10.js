var call = document.getElementById("call");
var userName = document.getElementById("name");
var num = document.getElementById("num");
var img = document.getElementById("userImg");
var cha=0;

call.onclick = function(){
    if(cha==0){
        setTimeout(function(){
            userName.style.visibility='visible';
            num.style.visibility='visible';
            call.style.backgroundColor='red';
            call.style.transform='translate(-75px,200px)';
            img.style.transform='translate(37px,30px)';
            img.style.width='150px';
            img.style.height='150px';
            call.innerHTML='전화종료';
            cha=1;
        },2000)} else {
        userName.style.visibility='hidden';
        num.style.visibility='hidden';
        call.style.backgroundColor='rgb(91, 172, 91)';
        call.style.transform='translate(-85px,150px)';
        img.style.transform='translate(37px,60px)';
        img.style.width='170px';
        img.style.height='170px';
        call.innerHTML='전화걸기';
        cha=0;
    }
};