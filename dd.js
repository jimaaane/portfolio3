let imgData = [
    "img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png",
    "img/11.png","img/12.png","img/13.png","img/14.png","img/15.png","img/16.png","img/17.png","img/18.png","img/19.png","img/20.png",
    "img/21.png","img/22.png","img/23.png","img/24.png","img/25.png","img/26.png","img/27.png","img/28.png","img/29.png","img/30.png"
];

let imgName = [
    "Interlude#23 과제전 Poster (B)","Interlude#23 과제전 Poster (R)", "덜렁덜렁 2022; 달력","능소화 Poster (study)'","JOYFUL Poster (study)","텍스쳐 Tool Book (image)","텍스쳐 Tool Book (Text)",
    "도시냄새; 조형원리x해시태그 사진전 도록","축복과 악몽의 사이에서; 책 표지","DG2 Tool Poster (1)","DG2 Tool Poster (2)",
    "DG2 Tool Poster(3)","Amaranth Branding","VD1 B2G Poster series 1","VD1 B2G Poster series 2",
    "템버린즈 날씨와 향 팀프로젝트","심청전 Poster (study)","날씨(바람) Poster (study)","2023 신년 연하장",
    "텍스쳐 Tool Book(2)","TG2 덤불 속 Book Design","2023달력 디자인","자기소개 인포그래픽 디자인","테크기업 신문 디자인",
    "VD1 Form Tasting Poster (1)","VD1 Form Tasting Poster (2)","VD1 Form Tasting Poster (3)",
    "33대 학회 홍보부 홍보 찌라시","디자인현장세미나 3주차 Poster","디자인현장세미나 9주차 Poster"
];

let myThumbnails = document.querySelectorAll(".thumbnail");
//console.log(myThumbnails);
let imgTags = document.querySelectorAll(".imgTag");
let thumbTexts = document.querySelectorAll(".textField");

console.log(myThumbnails);

for(let i = 0; i<myThumbnails.length; i++)
{
    imgTags[i].src = imgData[i];
    thumbTexts[i].textContent = imgName[i];

    myThumbnails[i].addEventListener('mouseover', overFn);
    myThumbnails[i].addEventListener('mouseout', outFn);
}

function overFn(e)
{
    //console.log(e.composePath()[1].querySelector(".imgTag"));
    e.composedPath()[1].querySelector(".imgTag").classList.add('on');
    e.composedPath()[0].classList.add('on');
}

function outFn(e)
{
    e.composedPath()[1].querySelector(".imgTag").classList.remove('on');
    e.composedPath()[0].classList.remove('on');
}
// 맨 위로 가는 버튼을 클릭하면 페이지를 맨 위로 이동합니다.
document.getElementById("toTop").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });