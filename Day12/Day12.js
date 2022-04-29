var balTxt = document.getElementById('balTxt');
var zzang = document.getElementById('zzang');
var userText = document.getElementById('userText');
var submit = document.getElementById('submit');
var disco = document.getElementById('disco');
var color = ["red","yellow","blue","green"];
var randomNum = 0;

submit.onclick=function(){
    if(userText.value=='좋아하는 과자는?'){
        balTxt.innerHTML="초코비!";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="/Day11/dgs.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
        disco.style.visibility="hidden"
    } else if(userText.value=="취미는 뭐야?"){
        balTxt.innerHTML="기타연주야!";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="/Day11/jj5.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
        disco.style.visibility="hidden"
    } else if(userText.value=="파티하자"){
        balTxt.innerHTML="부리부리부리~!";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="/Day12/buriburi.gif";
        zzang.style.height="190px"
        zzang.style.margin="10px"
        disco.style.visibility="visible"
        setInterval(function() {
            randomNum = Math.random() * 3;
            var randomNumFloor = Math.floor(randomNum);
            disco.style.backgroundColor=color[randomNumFloor];
        }, 300);
    }
    
}