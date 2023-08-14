window.addEventListener("load",()=>{

//서브 헤더 클릭 풀다운 메뉴 

const LnbBtn = document.querySelectorAll(".sub_header>ul>li");

LnbBtn.forEach(item=>{
  item.addEventListener("click",e=>{
    item.classList.toggle("on");
  })
})

//스크롤 이벤트
const sliding = [
document.querySelector("div.investment"),//재무데이터 비재무 데이터
document.querySelector(".financial_visual"),//메인사진 2.5s
document.querySelector(".financial_title"),//h3 0.5s,p 1.5s
document.querySelector(".finance"),//h4 table
document.querySelector(".stock"),//h4 table
];

let slidingNum = 0;

window.addEventListener("wheel",e=>{
  if(e.deltaY>0){
    if(slidingNum<sliding.length){
      sliding[slidingNum].classList.add("on");
      slidingNum++
    }
  }
});

//메인 화면에 이벤트 따로 지정

let spot = document.querySelector("div.spot")//h2 on
let contentNav = document.querySelector("ul.content_nav")//지역네비바

let action = setTimeout(()=>{
  spot.classList.add("on")
  contentNav.classList.add("on")
},500);
})
