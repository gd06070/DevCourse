// document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo");
  const todoList = document.querySelector("#todoList");
  const addButton = document.querySelector("#add-btn");

  let keyCount = 0;

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("할 일 입력:");
      return;
    }

    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const btn = document.createElement("button");

    const key = keyCount;
    keyCount += 1;

    item.setAttribute("data-key", key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(btn);
    todoList.appendChild(item);

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (event) => {
      item.style.textDecoration = event.target.checked ? "line-through" : "";
    });
    text.textContent = input.value;

    btn.textContent = "제거하기";
    btn.addEventListener("click", (event) => {
      removeTodo(key);
    });
    input.value = '';
  };

  const removeTodo = (key) => {
    const item = document.querySelector(`[data-key="${key}"]`);
    todoList.removeChild(item);
  };

  addButton.addEventListener("click", addTodo);
  input.addEventListener("keyup", (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
    }
  });
// });
