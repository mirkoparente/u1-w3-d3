// to do list
const lista = document.getElementById("list");

lista.addEventListener("submit", function (e) {
  e.preventDefault();

  const listInput = document.getElementById("act");
  const listSave = listInput.value;
  console.log(listSave);

  let listItem = document.createElement("div");
  listItem.classList.add("item2");
  listItem.innerHTML = `
  <ul>
  <li>${listSave} </li>
  </ul>
  <span class="material-symbols-outlined">
  delete
  </span>
  `;
  document.getElementById("item").appendChild(listItem);
  const canc = document.querySelectorAll(".item2 span");
  canc.forEach((b) => {
    b.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
  });
  const del = document.querySelectorAll(".item2 li");
  del.forEach((d) => {
    d.addEventListener("click", function (e) {
      e.target.innerHTML = `<del><li>${listSave} </li></del>
      <span class="material-symbols-outlined">
      done
      </span> `;
      console.log(e);
    });
  });
  listInput.value = "";
});
