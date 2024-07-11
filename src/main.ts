import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="slider-container">
    <div class="slider">
        <div class="slide" style="background-color: #ff7b72;">슬라이드 11</div>
        <div class="slide" style="background-color: #7bed9f;">슬라이드 2</div>
        <div class="slide" style="background-color: #70a1ff;">슬라이드 3</div>
    </div>
  </div>
`

document.addEventListener('DOMContentLoaded', () => {
  const slider: HTMLElement = document.querySelector('.slider')!;
  const slides = document.querySelectorAll('.slide');
  const maxSlide = slides.length;
  let currentIndex = 0;
  let isSwiping = false;
  let startY: number;
  let initialPosition: number;

  const setSliderPosition = (index: number) => {
      slider.style.transform = `translateY(${-index * 100}vh)`;
  };

  slider.addEventListener('touchstart', (e: TouchEvent) => {
      isSwiping = true;
      startY = e.touches[0].pageY;
      initialPosition = startY;
      slider.classList.remove('smooth');
  });

  slider.addEventListener('touchmove', (e: TouchEvent) => {
      if (!isSwiping) return;
      e.preventDefault();
      const currentY = e.touches[0].pageY;
      const diffY = currentY - startY;
      const position = -currentIndex * window.innerHeight + diffY;
      slider.style.transform = `translateY(${position}px)`;
  });

  slider.addEventListener('touchend', (e: TouchEvent) => {
      isSwiping = false;
      const endY = e.changedTouches[0].pageY;
      const distance = endY - initialPosition;

      if (distance < -50) {
          currentIndex = Math.min(currentIndex + 1, maxSlide - 1);
      } else if (distance > 50) {
          currentIndex = Math.max(currentIndex - 1, 0);
      }

      slider.classList.add('smooth');
      setSliderPosition(currentIndex);
  });
});
