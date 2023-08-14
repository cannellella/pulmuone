//main.js
window.addEventListener("load",()=>{

//영상 슬라이드
const btnNext = document.querySelector("a.btn_next");//다음슬라이드 화살표
const btnPrev = document.querySelector("a.btn_prev");//이전슬라이드 화살표
const slide = document.querySelectorAll("li.slide");//슬라이드(.active)
const slideRoll = document.querySelectorAll(".slide_roll>ul>li>a");//슬라이드 네비(.on)

let bnnNum = 0;
let lastNum = slide.length - 1;//슬라이드 개수 지정

function activation(list,index){
    list.forEach(item=>{
        item.classList.remove("active","on");
    });
    list[index].classList.add("active","on");
};

//영상의 다음페이지로 이동
btnNext.addEventListener("click",()=>{
    bnnNum++
    if(bnnNum>lastNum)bnnNum = 0;
    //슬라이드가 바뀜
    activation(slide,bnnNum,"active");
    //해당 슬라이드의 슬라이드 롤이 바뀜
    activation(slideRoll,bnnNum,"on");
});
//영상의 이전 페이지로 이동
btnPrev.addEventListener("click",()=>{
    bnnNum--
    if(bnnNum<0) bnnNum = lastNum;
    //슬라이드 마지막 번호가 된다면
    activation(slide,bnnNum,"active");
    activation(slideRoll,bnnNum,"on");
})

//영상 자동 슬라이드
function autoBanner(){
    bnnNum++
    if(bnnNum>lastNum) bnnNum = 0;
    activation(slide,bnnNum);
    activation(slideRoll,bnnNum);

    autoBnn = setTimeout(autoBanner,5000);
}

let autoBnn = setTimeout(autoBanner,5000);//시간 설정 함수

/*배너 재생 멈춤버튼*/ 

const btnPlay = document.querySelector(".play");//슬라이드 재생버튼(.on)

let flag = true;

btnPlay.addEventListener("click",(e)=>{
    e.preventDefault();

    if(flag){
        btnPlay.classList.add("on");
        clearTimeout(autoBnn);//영상 재생 정지
        flag=false;//다시 재생 가능하도록 변경
    }else{
        btnPlay.classList.remove("on");
        autoBnn = setTimeout(autoBanner,5000);
        flag = true;
    };
});

/*롤링 버튼*/ 

for(let i=0; i<slideRoll.length; i++){
    slideRoll[i].addEventListener('click',e=>{
        e.preventDefault();
        activation(slide,i,"active");
        activation(slideRoll,i,"on");
    });
};


//pc 적용 스크롤 이벤트 
if(window.matchMedia("(min-width:1025px)").matches){
    // 네비바
// 각 스크롤이 페이지에 도착할때마다 해당 페이지의 CLASS가 ON 된다.
// 각 스크롤을 클릭하면 해당 페이지로 이동한다.
// 각 페이지를 이동할때 스무스 하게가 아닌 와까닥 넘어간다. 

const contents = document.querySelectorAll("#container > section")
const NaviBar = document.querySelectorAll("div.NaviBar > ul > li")
const NaviPosition = document.querySelector("div.NaviBar")


let devHeight = window.innerHeight;

window.addEventListener("resize",()=>{
devHeight = window.innerHeight;
});

//첫번째 페이지의 헤더 크기만큼 줄임
for(let y=0; y<contents.length; y++){

if(y === 0){
    contents[y].style.height = `${devHeight-140}px`;
}else{
    contents[y].style.height = `${devHeight}px`;
}    

}
console.log(devHeight);

//네비바 포지션
//푸터전에 멈추고 
//첫번째 장에서 사라짐 
window.addEventListener("scroll",()=>{
let scroll = window.scrollY;
console.log(scroll);
//메인에서는 네비바가 보이지않음
if(scroll <= 0 ){
    NaviPosition.classList.remove("block");
    NaviPosition.classList.remove("end");
//본문에서는 네비바가 block
}else if(scroll > 3000 && scroll > 3580){
    NaviPosition.classList.add("block");
    NaviPosition.classList.add("end");
//footer 안에서는 end 
}else{
    NaviPosition.classList.add("block")
    NaviPosition.classList.remove("end");
}
})

//네비바 클릭이벤트

for(let h = 0; h<NaviBar.length; h++){
NaviBar[h].addEventListener("click",(e)=>{
    e.preventDefault();
    //클릭시 네임 색깔 변경이벤트
    active2(h,NaviBar)
    active((h+1)*devHeight);
    })
}


//컨텐츠 한번에 넘어가는 이벤트

for(let n=0; n<contents.length; n++){
contents[n].addEventListener("wheel", e =>{
    if(e.deltaY <0){
        let prev = e.currentTarget.previousElementSibling.offsetTop;
        active(prev)
        active2(n-2,NaviBar)//네비바 자동 변경이벤트
    }else if(e.deltaY>0){
        let next = e.currentTarget.nextElementSibling.offsetTop;
        active(next)
        active2(n,NaviBar)//네비바 자동 변경이벤트
    }

});
};

//함수1
let active = (scrTop) => {
window.scroll({
    top:scrTop,
    left:0,
    behavior:"smooth"
});
for(i=0; i<contents.length; i++){
    if(scrTop >=[i]*devHeight && scrTop<(i+1)*devHeight){
        active2(i,contents)
    }
}
}
//함수2
let active2 = (index,list)=>{
list.forEach(item=>{
    item.classList.remove("on");
});
list[index].classList.add("on")
}
}


//현재 사이즈를 체크해서 resize;
window.addEventListener("resize",checkMediaQuery);


})

