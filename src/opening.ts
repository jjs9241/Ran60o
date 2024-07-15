

import image1 from '../public/assets/images/colored_freesia.png';

export const render = () => {
    document.querySelector<HTMLDivElement>('#opening-slide')!.innerHTML = `
        <div>
        <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>인사말</div></div><div class="horizontal-line"></div></div><div class="greetings"><img class="flower" src="${image1}"><p><span class="emphasis">60</span>번째 생일을 축하합니다!</p><span class="linebreak"></span><p>그녀가 자신이 태어난 날로 돌아왔습니다.<p>항상 우리 곁을 지켜주고 함께해 온<p>지난 시간을 추억하며<p>앞으로의 새로운 여정의 시작에<p>그녀에게 소중한 사람들을 모시고자 합니다.<p>함께하는 이 자리가<p>모두의 행복과 사랑이 되길 기원합니다.</p></div></div></div></div>
        </div>
    `
}
