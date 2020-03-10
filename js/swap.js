let styleSheet = document.querySelector("#stylesheet");
let pokemonList = document.querySelector("#pokemonList");

window.addEventListener("click", function() {
  styleSheet.href = "css/" + pokemonList.value;
});
