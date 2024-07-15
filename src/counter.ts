function getTimeRemaining(endtime: string) {
  const now = new Date();
  const endTime = new Date(endtime).getTime();
  const timeDiff = endTime - now.getTime();

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return {
      total: timeDiff,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
  };
}

const dDay = '2024-08-24T13:00:00+09:00';

export function setupCounter(counterElement: Element) {

  let clockInterval: number | undefined = undefined;

  function updateClock() {
        try {
            const remainingTime = getTimeRemaining(dDay);
            const timeHtml = `<div class="item"><p class="digit">${remainingTime.days}</p><p class="unit">일</p></div><div class="item"><p class="digit">${remainingTime.hours}</p><p class="unit">시간</p></div><div class="item"><p class="digit">${remainingTime.minutes}</p><p class="unit">분</p></div><div class="item"><p class="digit">${remainingTime.seconds}</p><p class="unit">초</p></div>`
            counterElement.innerHTML = timeHtml
        } catch (error) {
            console.error("An error occurred while updating the clock:", error);
            if(clockInterval) clearInterval(clockInterval);
        }
    }

  clockInterval = window.setInterval(updateClock, 1000);
  updateClock();
}
