'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;

  function countUp() {
    // console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  // スタートボタン押下時の処理
  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });

  // ストップボタン押下時の処理
  stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
  });
}