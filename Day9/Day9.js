var coco = {poster:"/Day9/coco.jpg", title:"코코", year:2017, genre:"애니메이션, 판타지, 가족, 음악" , summary:"뮤지션을 꿈꾸는 소년 미구엘은 전설적인 가수 에르네스토의 기타에 손을 댔다 ‘죽은 자들의 세상’에 들어가게 된다.그리고 그곳에서 만난 의문의 사나이 헥터와 함께 상상조차 못했던 모험을 시작하게 되는데…과연 ‘죽은 자들의 세상’에 숨겨진 비밀은? 그리고 미구엘은 무사히 현실로 돌아올 수 있을까?"};

var up = {poster:"/Day9/up.jpg", title:"업", year:2009, genre:"애니메이션, 코미디, 어드벤처, 가족", summary:"평생 모험을 꿈꿔 왔던 ‘칼’ 할아버지는 수천 개의 풍선을 매달아 집을 통째로 남아메리카로 날려 버리는데,‘칼’ 할아버지의 이 위대한 모험에 초대 받지 않은 불청객이 있었으니,바로 황야의 탐험가 ‘러셀’! 지구상에 둘도 없을 이 어색한 커플이 함께 하는 대모험.그들은 과연 남미의 잃어버린 세계에서 사라져 버린 꿈과 희망, 행복을 다시 찾을 수 있을까?"};

var loving = {poster:"/Day9/lovingVincent.jpg", title:"러빙 빈센트", year:2017, genre:"미스터리, 애니메이션, 범죄", summary:"살아생전 단 한 점의 그림만을 팔았던 화가 ‘빈센트’의 죽음 후 1년. ‘아르망’은 그의 그림을 사랑했던 아버지의 부탁을 받고, ‘빈센트’가 마지막으로 살았던 장소로 찾아가 미스터리한 죽음을 추적해 나간다.‘빈센트’를 그리워하는 여인 '마르그리트'.‘빈센트’를 가장 가까운 곳에서 지켜봤던 ‘아들린’.‘빈센트’의 비밀을 알고 있는 닥터 ‘폴 가셰’.‘아르망’은 그들의 이야기를 듣고,인간 ‘빈센트’에 대해 몰랐던 놀라운 사실들을 알게 되는데…"};

var cocoBtn = document.getElementById("cocoBtn");
var upBtn = document.getElementById("upBtn");
var lovingBtn = document.getElementById("lovingBtn");

var poster=document.getElementsByClassName("poster");
var title = document.getElementsByClassName("title");
var year = document.getElementsByClassName("year");
var genre = document.getElementsByClassName("genre");
var summary = document.getElementsByClassName("summary");

cocoBtn.onclick=function(){
    poster[0].src=coco.poster;
    title[0].innerHTML=coco.title;
    year[0].innerHTML=coco.year;
    genre[0].innerHTML=coco.genre;
    summary[0].innerHTML=coco.summary;
}
upBtn.onclick=function(){
    poster[0].src=up.poster;
    title[0].innerHTML=up.title;
    year[0].innerHTML=up.year;
    genre[0].innerHTML=up.genre;
    summary[0].innerHTML=up.summary;
}
lovingBtn.onclick=function(){
    poster[0].src=loving.poster;
    title[0].innerHTML=loving.title;
    year[0].innerHTML=loving.year;
    genre[0].innerHTML=loving.genre;
    summary[0].innerHTML=loving.summary;
}