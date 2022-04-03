console.log("Welcome to interactive web");

const BASE_URI = window.location.pathname;

var page = 1;
var maxPage = 2;

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;
    console.log("Key pressed:", keyName);
    switch (keyName) {
      case "ArrowLeft":
        gotoPrev();
        break;
      case "ArrowRight":
        gotoNext();
        break;
    }
  },
  false
);

function gotoPrev() {
  if (page > 1) {
    page -= 1;
    renderPage(page);
  } else {
    console.log("Reached first page");
  }
}

function gotoNext() {
  if (page < maxPage) {
    page += 1;
    renderPage(page);
  } else {
    console.log("Reached last page");
  }
}

function renderPage(page) {
  fetch(`${BASE_URI}views/cards/page-${page}.html`)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("page").innerHTML = data;
    });
}

function getPageNo() {
  return page;
}

renderPage(page);
