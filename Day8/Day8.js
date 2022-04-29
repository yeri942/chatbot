var contents = ["새","우","버","거"];
var pop= " ";
var num=0;
var clickBtn = document.getElementById("clickBtn");
var clearBtn = document.getElementById("clearBtn");
var text = document.getElementsByTagName("h1");


clickBtn.onclick=function(){
    if(num<contents.length){
        pop += contents[num];
        text[0].innerHTML=pop;
        num++;
        if(num==contents.length){
            clickBtn.disabled=true;
            clickBtn.style.backgroundColor="gray";
        }
    }

}
clearBtn.onclick=function(){
    num=0;
    pop =" ";
    text[0].innerHTML=pop;
    clickBtn.disabled=false;
    clickBtn.style.backgroundColor="black";
}


