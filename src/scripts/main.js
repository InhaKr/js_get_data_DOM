'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.population');


  const value = Array.from(spans).map((span) => span.textContent);
  let r = 0;

  for (let i = 0; i < value.length; i++) {
    // console.log(typeof(value[i]));
    r += +value[i].replace(/,/g, '');
  }

  const total = document.querySelector('.total-population');

  total.textContent = r.toLocaleString('en-US');

  const average = document.querySelector('.average-population');

  average.textContent = Math.floor(r / value.length).toLocaleString('en-US');
});
