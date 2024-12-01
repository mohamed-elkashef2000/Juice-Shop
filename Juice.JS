//open and close menu icon
let openMenu = document.querySelector(".openMenu");
let mainMenu = document.querySelector(".main-menu");
let header = document.querySelector("header");
let eleMenu = document.querySelectorAll("li ");
console.log(eleMenu);

openMenu.onclick = function () {
  openMenu.children[0].classList.toggle("active-spanOne");
  openMenu.children[1].classList.toggle("active-spanTwo");
  openMenu.children[2].classList.toggle("active-spanThree");
  if (openMenu.children[0].classList.contains("active-spanOne")) {
    mainMenu.style.top = "5%";
  } else {
    mainMenu.style.top = "-150%";
  }
};

// click link menu hidden menu and go section link
eleMenu.forEach(function (ele) {
  ele.onclick = function () {
    mainMenu.style.top = "-150%";
    openMenu.children[0].classList.toggle("active-spanOne");
    openMenu.children[1].classList.toggle("active-spanTwo");
    openMenu.children[2].classList.toggle("active-spanThree");
  };
});
