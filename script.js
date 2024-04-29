for (let i = 0; i < (16*16); i++) {
  const el = document.createElement("div");
  el.classList.add("el-grid");

  document.querySelector("#container").appendChild(el);
}