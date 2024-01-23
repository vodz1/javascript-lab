let imagesarr = [
  "pics/ACBX0329 copy.JPG",
  "pics/HYAX3614.JPG",
  "pics/IMG_2775.JPG",
  "pics/IMG_3058.JPG",
  "pics/IMG_3160.JPG",
  "pics/IMG_E2452.JPG",
  "pics/WNDH6059.JPG",
];
let i = 0;

function StartShow() {
  t = setInterval("NextShow()", 1000);
}

function NextShow() {
  i++;
  if (i >= imagesarr.length) i = 0;
  mimg.src = imagesarr[i];
}

function PrevShow() {
  i--;
  if (i < 0) i = imagesarr.length - 1;
  mimg.src = imagesarr[i];
}

function StopShow() {
  clearInterval(t);
}

