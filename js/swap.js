let styleSheet = document.querySelector("#stylesheet");
let pokemonList = document.querySelector("#pokemonList");

window.addEventListener("click", function () {
  styleSheet.href = "css/" + pokemonList.value;
  if (pokemonList.value == "056-mankey.css") {
    document.querySelector(".canvas").classList.add("big");
  } else {
    document.querySelector(".canvas").classList.remove("big");
  }
});
