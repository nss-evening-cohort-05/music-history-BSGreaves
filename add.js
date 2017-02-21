var addLink = document.getElementById("add-link");
var addSection = document.getElementById("add-section");

addLink.addEventListener("click", function() {
  viewSection.classList.add("hidden");
  viewSection.classList.remove("visible");

  addSection.classList.add("visible");
  addSection.classList.remove("hidden");
  console.log("Add Clicked");
});