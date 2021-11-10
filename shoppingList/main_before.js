const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

// ~할때 이벤트를 처리하는 함수는 on을 붙인다.
function onAdd() {
  // 코드를 설명하는 주석은 가독성이 떨어지므로 작성 X
  // 가능하면 "왜" 의도를 작성해라
  // 아래 주석은 공부 목적이므로 남겨둔다.

  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  // 2. 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
  const item = createItem(text);

  // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);

  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });

  // 5. 인풋을 초기화 한다. and focus
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
