let item;

function input() {
  item = document.querySelector("input").value;
}

function button_click() {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  let btnText = document.createTextNode("X");
  btn.appendChild(btnText);
  let node = document.createTextNode(item);
  p.appendChild(node);
  p.appendChild(btn);
  const main = document.querySelector("main");
  main.appendChild(p);
  item = "";
  let clear = document.querySelector("input");
  clear.value = "";
}

function pressEnter() {
  if (window.event.keyCode == 13) {
    console.log(1);
    button_click();
  }
}
