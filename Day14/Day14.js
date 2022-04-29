var balTxt = document.getElementById('balTxt');
var zzang = document.getElementById('zzang');
var userText = document.getElementById('userText');
var submit = document.getElementById('submit');
var disco = document.getElementById('disco');
var color = ["red","yellow","blue","green"];
var randomNum = 0;
var question = "";
var answer = "";
var key = 0;


var json = 
[
	{
		"question" : "액션가면",
		"answer" : "액션빔!!!!!!!!!!!!"
	}
]

submit.onclick=function(){
    if(key == 1){
		if(userText.value == "네"){
			balTxt.innerHTML = "대답을 입력해주세요!";
			key = 2;
		} else if (userText.value == "아니요"){
			balTxt.innerHTML = "다음에 알려줘!";
			key = 0;
        } else {
			balTxt.innerHTML = "배웠어 호호이!";
			key = 0;
		}
		return;
	}

	if(key == 2){
		answer = userText.value;
		push_json();
	}

	for(let i = 0; i < json.length; i++){
		if(userText.value == json[i].question){
			balTxt.innerHTML = json[i].answer;
			return;
		}
	}
	
	balTxt.innerHTML = "말을 가르쳐 주실래요?(네 or 아니요)";
	question = userText.value;
	key = 1;

    if(userText.value=='좋아하는 과자는?'){
        balTxt.innerHTML="초코비!";
        zzang.src="/Day11/dgs.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
        disco.style.visibility="hidden"
    } else if(userText.value=="취미는 뭐야?"){
        balTxt.innerHTML="기타연주야!";
        zzang.src="/Day11/jj5.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
        disco.style.visibility="hidden"
    } else if(userText.value=="파티하자"){
        balTxt.innerHTML="부리부리부리~!";
        zzang.src="/Day12/buriburi.gif";
        zzang.style.height="190px"
        zzang.style.margin="10px"
        disco.style.visibility="visible"
        setInterval(function() {
            randomNum = Math.random() * 3;
            var randomNumFloor = Math.floor(randomNum);
            disco.style.backgroundColor=color[randomNumFloor];
        }, 300);
    } else {
        disco.style.visibility="hidden";
            zzang.src="/Day1/zzang.gif"
    }
}

function push_json(){
	json.push({question: `${question}`, answer: `${answer}`});
	balTxt.innerHTML = "이제 배웠어!";
	key = 0;
}