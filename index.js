let BtnPulse = document.getElementsByClassName('btn'),
  forEach = Array.prototype.forEach;

forEach.call(BtnPulse, function (b) {
  b.addEventListener('click', addElement);
  console.log('1');
});

function addElement(e) {
  let addDiv = document.createElement('div');
  let mValue = Math.max(this.clientWidth, this.clientHeight);
  let sDiv = addDiv.style;
  let px = 'px';
  let rect = this.getBoundingClientRect();
  sDiv.width = sDiv.height = mValue + px;
  sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
  sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
  addDiv.classList.add('pulse');
  this.appendChild(addDiv);
  setTimeout(() => addDiv.remove(), 500);
}
