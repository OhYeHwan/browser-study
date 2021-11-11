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
    if (event.target.className === "items") {
      return;
    }
    if (event.target.className === "item__checkbox") {
      const checkId = event.target.id;
      const toBeLined = document.querySelector(
        `.item__checkbox[id="${checkId}"]`
      );

      if (toBeLined.checked) {
        document
          .querySelector(`label[for="${checkId}"]`)
          .setAttribute("class", "item__name");
        console.log(document.querySelector(`label[for="${checkId}"]`));
      } else {
        document
          .querySelector(`label[for="${checkId}"]`)
          .setAttribute("class", "");
        console.log(document.querySelector(`label[for="${checkId}"]`));
      }
    }
  });
};
