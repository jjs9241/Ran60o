(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}})();const v="/Ran60o/assets/lrs01-BFT0tMwd.jpg",m="/Ran60o/assets/lrs02-OHmVPR-Q.jpg",u=()=>{document.querySelector("#home-slide").innerHTML=`
      <div>
        <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="home-container"><img src="${v}" alt="Image 1" class="floating-image image1"><img src="${m}" alt="Image 2" class="floating-image image2"><div class="vertical-text">란수씨, 회갑입니다.</div></div></div></div></div>
      </div>
    `},f="/Ran60o/assets/colored_freesia-DJ3DaALO.png",g=()=>{document.querySelector("#opening-slide").innerHTML=`
        <div>
        <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>인사말</div></div><div class="horizontal-line"></div></div><div class="greetings"><img class="flower" src="${f}"><p><span class="emphasis">60</span>번째 생일을 축하합니다!</p><span class="linebreak"></span><p>그녀가 자신이 태어난 날로 돌아왔습니다.<p>항상 우리 곁을 지켜주고 함께해 온<p>지난 시간을 추억하며<p>앞으로의 새로운 여정의 시작에<p>그녀에게 소중한 사람들을 모시고자 합니다.<p>함께하는 이 자리가<p>모두의 행복과 사랑이 되길 기원합니다.</p></div></div></div></div>
        </div>
    `};function h(d){const c=new Date,a=new Date(d).getTime()-c.getTime(),s=Math.floor(a/(1e3*60*60*24)),n=Math.floor(a/(1e3*60*60)%24),e=Math.floor(a/1e3/60%60),t=Math.floor(a/1e3%60);return{total:a,days:s,hours:n,minutes:e,seconds:t}}const w="2024-08-24T13:00:00+09:00";function y(d){let c;function l(){try{const a=h(w),s=`<div class="item"><p class="digit">${a.days}</p><p class="unit">일</p></div><div class="item"><p class="digit">${a.hours}</p><p class="unit">시간</p></div><div class="item"><p class="digit">${a.minutes}</p><p class="unit">분</p></div><div class="item"><p class="digit">${a.seconds}</p><p class="unit">초</p></div>`;d.innerHTML=s}catch(a){console.error("An error occurred while updating the clock:",a),c&&clearInterval(c)}}c=window.setInterval(l,1e3),l()}const L=()=>{document.querySelector("#calander-slide").innerHTML=`
    <div>
      <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>연회 일시</div></div><div class="horizontal-line"></div></div><div class="schedule-wedding-date-wrapper"><div class="wedding-date-time"><p>2024년 8월 24일</p><p>토요일 오후 1시</p></div></div><div class="schedule-calandar-wrapper"><div class="common-calandar"><div class="common-calandar-table"><div class="common-calandar-week"><div class="common-calandar-day">일</div><div class="common-calandar-day">월</div><div class="common-calandar-day">화</div><div class="common-calandar-day">수</div><div class="common-calandar-day">목</div><div class="common-calandar-day">금</div><div class="common-calandar-day">토</div></div><div class="common-calandar-week"><div class="common-calandar-date"><span class=""></span><span class=""></span></div><div class="common-calandar-date"><span class=""></span><span class=""></span></div><div class="common-calandar-date"><span class=""></span><span class=""></span></div><div class="common-calandar-date"><span class=""></span><span class=""></span></div><div class="common-calandar-date"><span class="">1</span><span class=""></span></div><div class="common-calandar-date"><span class="">2</span><span class=""></span></div><div class="common-calandar-date"><span class="">3</span><span class=""></span></div></div><div class="common-calandar-week"><div class="common-calandar-date"><span class="">4</span><span class=""></span></div><div class="common-calandar-date"><span class="">5</span><span class=""></span></div><div class="common-calandar-date"><span class="">6</span><span class=""></span></div><div class="common-calandar-date"><span class="">7</span><span class=""></span></div><div class="common-calandar-date"><span class="">8</span><span class=""></span></div><div class="common-calandar-date"><span class="">9</span><span class=""></span></div><div class="common-calandar-date"><span class="">10</span><span class=""></span></div></div><div class="common-calandar-week"><div class="common-calandar-date"><span class="">11</span><span class=""></span></div><div class="common-calandar-date"><span class="">12</span><span class=""></span></div><div class="common-calandar-date"><span class="">13</span><span class=""></span></div><div class="common-calandar-date"><span class="">14</span><span class=""></span></div><div class="common-calandar-date"><span class="">15</span><span class=""></span></div><div class="common-calandar-date"><span class="">16</span><span class=""></span></div><div class="common-calandar-date"><span class="">17</span><span class=""></span></div></div><div class="common-calandar-week"><div class="common-calandar-date"><span class="">18</span><span class=""></span></div><div class="common-calandar-date"><span class="">19</span><span class=""></span></div><div class="common-calandar-date"><span class="">20</span><span class=""></span></div><div class="common-calandar-date"><span class="">21</span><span class=""></span></div><div class="common-calandar-date"><span class="">22</span><span class=""></span></div><div class="common-calandar-date"><span class="">23</span><span class=""></span></div><div class="common-calandar-date"><span class="d-day">24</span><span class="mark"></span></div></div><div class="common-calandar-week"><div class="common-calandar-date"><span class="">25</span><span class=""></span></div><div class="common-calandar-date"><span class="">26</span><span class=""></span></div><div class="common-calandar-date"><span class="">27</span><span class=""></span></div><div class="common-calandar-date"><span class="">28</span><span class=""></span></div><div class="common-calandar-date"><span class="">29</span><span class=""></span></div><div class="common-calandar-date"><span class="">30</span><span class=""></span></div><div class="common-calandar-date"><span class="">31</span><span class=""></span></div><div class="common-calandar-date"><span class=""></span><span class=""></span></div></div></div></div></div><div class="schedule-wedding-d-day-wrapper"><div class="common-wedding-date"><p class="wedding-duration-text">시작 시간 까지</p><div class="wedding-duration-counter"><div class="item"><p class="digit">424</p><p class="unit">일</p></div><div class="item"><p class="digit">7</p><p class="unit">시간</p></div><div class="item"><p class="digit">28</p><p class="unit">분</p></div><div class="item"><p class="digit">22</p><p class="unit">초</p></div></div></div></div></div></div></div>
    </div>
  `;const d=document.querySelector("#calander-slide"),c=d==null?void 0:d.querySelector(".wedding-duration-counter");console.log(c),c&&y(c)},M=()=>{document.querySelector("#space-slide").innerHTML=`
    <div>
      <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>오시는 길</div></div><div class="horizontal-line"></div></div><div class="location-wedding-place-info"><p class="location-address-short">윤세원의 일송정</p><p class="location-address-short" style="font-size: 20px;">(고양시 일산서구 법곳길 40)</p></div><div class="location-map-wrapper"><iframe src="https://m.map.kakao.com/actions/detailMapView?id=577313840&refService=place" width="100%" height="400px"></iframe></div></div></div></div>
    </div>
  `},T="https://docs.google.com/forms/d/e/1FAIpQLSeoozl8x4M3JuoH0tm7pmFrs7vRXc7lYfFpIF0BKclUrFBCQw/viewform?usp=sf_link",S=()=>{document.querySelector("#survey-slide").innerHTML=`
    <div>
      <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>참석 여부 알리기</div></div><div class="horizontal-line"></div></div><div class="location-wedding-place-info"><p class="location-address-short">아래 링크를 통해</p><p class="location-address-short">참석 여부를 알려주세요</p><p class="location-address-short" style="font-size: 20px; color: #5ac8fa; font-style: italic;"><a href="${T}" target="_blank" style="text-decoration: none; color: inherit;">참여 설문 링크</a></p></div><div class="location-map-wrapper"><div class="envelope"><div class="flap"></div></div></div></div></div></div>
    </div>
  `};document.querySelector("#app").innerHTML=`
  <div class="slider-container">
    <div class="slider">
        <div class="slide" id="home-slide"></div>
        <div class="slide" id="opening-slide"></div>
        <div class="slide" id="calander-slide"></div>
        <div class="slide" id="space-slide"></div>
        <div class="slide" id="survey-slide"></div>
    </div>
  </div>
`;u();g();L();M();S();document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".slider"),l=document.querySelectorAll(".slide").length;let a=0,s=!1,n,e;const t=i=>{d.style.transform=`translateY(${-i*100}vh)`};d.addEventListener("touchstart",i=>{s=!0,n=i.touches[0].pageY,e=n,d.classList.remove("smooth")}),d.addEventListener("touchmove",i=>{if(!s)return;i.preventDefault();const o=i.touches[0].pageY-n,r=-a*window.innerHeight+o;d.style.transform=`translateY(${r}px)`}),d.addEventListener("touchend",i=>{s=!1;const o=i.changedTouches[0].pageY-e;o<-50?a=Math.min(a+1,l-1):o>50&&(a=Math.max(a-1,0)),d.classList.add("smooth"),t(a)})});
