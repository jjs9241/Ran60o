import './style.css'

export const render = () => {
  document.querySelector<HTMLDivElement>('#space-slide')!.innerHTML = `
    <div>
      <div class="template-app-wrapper"><div class="component-wrapper-outer"><div class="component-wrapper-inner"><div class="common-header"><div class="common-header-info"><div>오시는 길</div></div><div class="horizontal-line"></div></div><div class="location-wedding-place-info"><p class="location-address-short">윤세원의 일송정</p><p class="location-address-short" style="font-size: 20px;">(고양시 일산서구 법곳길 40)</p></div><div class="location-map-wrapper"><iframe src="https://m.map.kakao.com/actions/detailMapView?id=577313840&refService=place" width="100%" height="400px"></iframe></div></div></div></div>
    </div>
  `
}
