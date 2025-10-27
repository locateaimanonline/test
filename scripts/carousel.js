var slideIndex = 1;
showImg(slideIndex);

function plusImgs(n) {
  showImg(slideIndex += n);
}

function showImg(n) {
  var i;
  var x = document.getElementsByClassName("figgroup");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
//figure out how to update it for best practice as espoused here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events (and also let/const) and if you can select element descendents