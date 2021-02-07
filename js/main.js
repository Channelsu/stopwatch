'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    // console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }

  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }

  function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  // ページ読み込み時の処理
  setButtonStateInitial();

  // スタートボタン押下時の処理
  start.addEventListener('click', () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  // ストップボタン押下時の処理
  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  // リセットボタン押下時の処理
  reset.addEventListener('click', () => {
    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
}