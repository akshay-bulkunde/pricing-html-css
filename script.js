const checkbox = document.getElementById("toggle-button");

checkbox.addEventListener("change", function (event) {
  event.preventDefault();
  if (this.checked) {
    // console.log("on");
    document.getElementById("price-1").innerText = "$19.99";
    document.getElementById("price-2").innerText = "$24.99 ";
    document.getElementById("price-3").innerText = "$39.99 ";
  } else {
    // console.log("off");
    document.getElementById("price-1").innerText = "$199.99";
    document.getElementById("price-2").innerText = "$249.99 ";
    document.getElementById("price-3").innerText = "$399.99 ";
  }
});
