// Your JS goes here
let div = document.createElement("div");
div.style.width = "11.1%";
div.style.cssFloat = "left";
div.style.paddingBottom = "11.1%";
for (let i = 0; i < 72; i++) {
  document.body.appendChild(div.cloneNode(true));
}

let audio = document.createElement("audio");
audio.src = "/trippy.wav";
audio.loop = true;
audio.autostart = true;
audio.hidden = true;
document.body.appendChild(audio);

// to make red/black
// document
//   .querySelectorAll("div:nth-child(odd)")
//   .forEach((div) => (div.style.background = "red"));
// document
//   .querySelectorAll("div:nth-child(even)")
//   .forEach((div) => (div.style.background = "black"));

// random colors

function randRGB() {
  return Math.floor(Math.random() * 256);
}
let divs = document.querySelectorAll("div");

function disco() {
  divs.forEach(
    (div) =>
      (div.style.background = `rgb(${randRGB()},${randRGB()},${randRGB()})`)
  );
}
disco();
setInterval(disco, 2000);
audio.play();
