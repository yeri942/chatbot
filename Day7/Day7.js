var time = 0;
var s = true;
document.addEventListener("DOMContentLoaded", function(){
  bEvent();
});

function init(){
  document.getElementById("time").innerHTML = "00:00:00";
}

function bEvent(){
    var hour = 0;
    var min = 0;
    var sec = 0;
    var timer;
    var start=document.getElementById("start");
    var pause=document.getElementById("pause");
    var stop=document.getElementById("stop");

  start.onclick=function(){
    if(s){
      s = false;

      if(time == 0){
        init();
      }

      timer = setInterval(function(){
        time++;

        min = Math.floor(time/60);
        hour = Math.floor(min/60);
        sec = time%60;
        min = min%60;

        var th = hour;
        var tm = min;
        var ts = sec;
        if(th<10){
        th = "0" + hour;
        }
        if(tm < 10){
        tm = "0" + min;
        }
        if(ts < 10){
        ts = "0" + sec;
        }

        document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
      }, 1000);
    }
  };

  pause.onclick=function(){
    if(time != 0){
      clearInterval(timer);
      s = true;
    }
  };

  stop.onclick=function(){
    if(time != 0){
      clearInterval(timer);
      s = true;
      time = 0;
      init();
    }
  };
}