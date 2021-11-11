window.onload = function () {
  const items = document.querySelector(".items");
  const input = document.querySelector(".footer__input");
  const form = document.querySelector(".new-form");

  function onAdd() {
    const text = input.value;
    if (text === "") {
      input.focus();
      return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: "center" });
    input.value = "";
    input.focus();
  }

  let id = 0;
  function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");
    itemRow.setAttribute("data-id", id);
    itemRow.innerHTML = `
    <div class="item">
        <input type="checkbox" id="${text}" class="item__checkbox">
        <label for="${text}">${text}</label>
            <button class="item__delete">
              <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>`;
    id++;
    return itemRow;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    onAdd();
  });

  items.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
      const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
      toBeDeleted.remove();
    }

    const cbox = document.querySelector(".item__checkbox");
    if (cbox) {
      const t = document.querySelector("label");
      if (!cbox.checked) {
        cbox.checked = true;
        t.setAttribute("class", "item__name");
      } else {
        cbox.checked = false;
        t.setAttribute("class", "");
      }
    }
  });
};
