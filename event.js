document.querySelector(".switch").addEventListener("change", () => {
  let allPrice = document.querySelectorAll(".price");
  let reversePrice = {
    19.99: 199.99,
    24.99: 249.99,
    39.99: 399.99,
    399.99: 39.99,
    249.99: 24.99,
    199.99: 19.99,
  };
  for (let index = 0; index < allPrice.length; index++) {
    allPrice[index].innerHTML = reversePrice[allPrice[index].innerHTML];
  }
});
