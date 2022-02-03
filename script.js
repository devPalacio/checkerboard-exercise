// Your JS goes here

let mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
mainDiv.id = "container";
mainDiv.style.width = "100%";
mainDiv.style.position = "absolute";
mainDiv.style.backgroundImage =
  "linear-gradient(135deg, rgba(3,3,252,.7), rgba(255,0,0,.7))";

let div = document.createElement("div");
div.style.width = "11.1%";
div.style.cssFloat = "left";
div.style.paddingBottom = "11.1%";
div.style.position = "relative";
div.style.zIndex = "-1";
for (let i = 0; i < 63; i++) {
  mainDiv.appendChild(div.cloneNode(true));
}

// red/black
// document
//   .querySelectorAll("div:nth-child(odd)")
//   .forEach((div) => (div.style.background = "red"));
// document
//   .querySelectorAll("div:nth-child(even)")
//   .forEach((div) => (div.style.background = "black"));

// random colors

// function randRGB() {
//   return Math.floor(Math.random() * 256);
// }
// let divs = document.querySelectorAll("div");
// divs.forEach(
//   (div) =>
//     (div.style.background = `rgba(${randRGB()},${randRGB()},${randRGB()},.2)`)
// );

// gradient

document
  .querySelectorAll("div:nth-child(odd)")
  .forEach((div) => (div.style.backgroundColor = "rgba(33,33,33,.9"));
document
  .querySelectorAll("div:nth-child(even)")
  .forEach((div) => (div.style.backgroundColor = "rgba(255,255,255,.1)"));
