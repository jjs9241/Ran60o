import image1 from '../public/assets/images/lrs01.jpg';
import image2 from '../public/assets/images/lrs02.jpg';

export const render = () => {
    document.querySelector<HTMLDivElement>('#home-slide')!.innerHTML = `
      <div>
        <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="home-container"><img src="${image1}" alt="Image 1" class="floating-image image1"><img src="${image2}" alt="Image 2" class="floating-image image2"><div class="vertical-text">란수씨, 회갑입니다.</div></div></div></div></div>
      </div>
    `
  }
  