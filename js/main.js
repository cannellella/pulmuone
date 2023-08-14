//main.js
window.addEventListener("load",()=>{
//메인메뉴 풀다운 
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll("nav.gnb>ul li");
const subMenu = document.querySelectorAll("nav.gnb>ul>li ul");

for(var i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mouseover",(e)=>{

        headerWrap.classList.add("on");
        subMenu.forEach(item=>{
            item.classList.add("on");
        });
    });
    //mouseout
    gnbMenu[i].addEventListener("mouseout",(e)=>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item =>{
            item.classList.remove("on");
        });
    });

}


//모바일
///모바일을 클릭하면 body 가 멈추고
//바탕에 어두운 배경이 깔림
const mobBack = document.querySelector("div.mobBack")
//메뉴바 클릭버튼
const mobMenuBtn = document.querySelector("div.mobMenuBtn")
//메뉴박스
const mobMenu = document.querySelector("div.mobMenu")
//메뉴박스 닫기버튼
const mobMenuCBtn = document.querySelector("div.mobMenuCBtn")

//모바일 메뉴 열기
mobMenuBtn .addEventListener("click", (e) => {     
    mobMenu.classList.add("on");   
    mobBack.classList.add("on");  
    mobMenuBtn.children[0].setAttribute("title","메뉴 열기");
}); 

//모바일 메뉴 닫기
mobMenuCBtn .addEventListener("click", (e) => {    
    e.preventDefault(); 
    mobMenu.classList.remove("on");   
    mobBack.classList.remove("on");    
    mobMenuCBtn.setAttribute("title","메뉴 닫기");
}); 

//메뉴바 토글버튼 

//메뉴바 클릭버튼 (메뉴바를 클릭하면 하위 메뉴가 열림)
const mobMenuBar = document.querySelectorAll("div.mobGnbMenu>ul>li")

//메뉴바 클릭버튼(메뉴바를 클릭하면 다른 메뉴바는 스스로 닫힘)
//이중 forEach문 
mobMenuBar.forEach(item=>{
    item.addEventListener("click",e=>{
        mobMenuBar.forEach(item=>{
            item.classList.remove("on");
        });
        e.currentTarget.classList.add("on");
    })
})

//써치 클릭버튼
const srchBtn = document.querySelector("form.mobsrch")
//써치박스
const srchPage = document.querySelector("form.mobsrch>fieldset")

srchBtn.addEventListener("click",(e)=>{
    srchBtn.classList.toggle("on");
    mobBack.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.setAttribute("title","검색하기 닫기")
    }else{
        e.currentTarget.setAttribute("title","검색하기 열기")
    }
});

//footer familly_box
//원본 사이트에서는 마우스 아웃 했을때 사라지지만 편의성을 위해 변경

const famBoxBtn = document.querySelector(".footer_inner>div.family_box>p");
const famBox = document.querySelector(".footer_inner>div.family_box>ul");

famBoxBtn .addEventListener("click", (e) => {     
famBox.classList.add("on"); 
famBox.setAttribute("title","패밀리사이트 닫기");    
}); 

famBox.addEventListener("click", (e) => {    
e.preventDefault(); 
famBox.classList.remove("on");   
famBoxBtn.setAttribute("title","패밀리사이트 열기");     
}); 


});