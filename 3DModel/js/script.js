document.getElementById('CoursesBtn').addEventListener("click", function () {
  // alert('click');
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById('TrainigBtnCinema').addEventListener("click", function () {
  document.getElementById('clock-block1').classList.toggle('clock--activ');
  // alert('click');
})

document.getElementById('TrainigBtnBlender').addEventListener("click", function () {
  document.getElementById('clock-block2').classList.toggle('clock--activ');
  // alert('click');
})

document.getElementById('TrainigBtn3DMax').addEventListener("click", function () {
  document.getElementById('clock-block3').classList.toggle('clock--activ');
  // alert('click');
})
document.getElementById('TrainigBtnSculpt').addEventListener("click", function () {
  document.getElementById('clock-block4').classList.toggle('clock--activ');
  // alert('click');
})

document.getElementById('BtnFace').addEventListener("click", function () {
  document.getElementById('BtnFace--click').style.backgroundColor = "green";
})

document.getElementById('BtnTwitt').addEventListener("click", function () {
  document.getElementById('BtnTwitt--click').style.backgroundColor = "green";
})

document.getElementById('BtnFoto').addEventListener("click", function () {
  document.getElementById('BtnFoto--click').style.backgroundColor = "green";
})

document.getElementById('BtnVideo').addEventListener("click", function () {
  document.getElementById('BtnVideo--click').style.backgroundColor = "green";
})
