// var TxtRotate = function (el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = "";
//   this.tick();
//   this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function () {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//   var that = this;
//   var delta = 300 - Math.random() * 100;

//   if (this.isDeleting) {
//     delta /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function () {
//     that.tick();
//   }, delta);
// };
// window.onload = function () {
//   var elements = document.getElementsByClassName("txt-rotate");
//   for (var i = 0; i < elements.length; i++) {
//     var toRotate = elements[i].getAttribute("data-rotate");
//     var period = elements[i].getAttribute("data-period");
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//   document.body.appendChild(css);
// };

let wrapper;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function writingAll(stringTarget, container) {
  wrapper = document.querySelector("[" + container + "]");
  const stringsContainer = document.getElementsByClassName(stringTarget);

  while (wrapper) {
    for (i = 0; i < stringsContainer.length; i++) {
      const string = stringsContainer[i].textContent;
      await write(string);
      await sleep(1000);
      await erase();
      await sleep(1000);
    }
  }
}

async function write(text) {
  let index = 0;
  while (index < text.length) {
    const timeout = 100;
    await sleep(timeout);
    index++;
    wrapper.innerHTML = text.substring(0, index);
  }
}

async function erase() {
  while (wrapper.textContent.length) {
    const timeout = 100;
    await sleep(timeout);
    wrapper.textContent = wrapper.textContent.substring(
      0,
      wrapper.textContent.length - 2
    );
  }
}

writingAll("tipingTextItem", "data-text");
