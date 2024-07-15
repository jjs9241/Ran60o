import './style.css'

const surveyLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeoozl8x4M3JuoH0tm7pmFrs7vRXc7lYfFpIF0BKclUrFBCQw/viewform?usp=sf_link'

export const render = () => {
  document.querySelector<HTMLDivElement>('#survey-slide')!.innerHTML = `
    <div>
      <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>참석 여부 알리기</div></div><div class="horizontal-line"></div></div><div class="location-wedding-place-info"><p class="location-address-short">아래 링크를 통해</p><p class="location-address-short">참석 여부를 알려주세요</p><p class="location-address-short" style="font-size: 20px; color: #5ac8fa; font-style: italic;"><a href="${surveyLink}" target="_blank" style="text-decoration: none; color: inherit;">참여 설문 링크</a></p></div><div class="location-map-wrapper"><div class="envelope"><div class="flap"></div></div></div></div></div></div>
    </div>
  `
}