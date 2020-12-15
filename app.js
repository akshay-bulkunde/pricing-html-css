const changePriceContent = () => {
  if (document.getElementById("checkPlan").checked == true) {
    document.getElementById("basic-price").innerHTML = 19.99;
    document.getElementById("professional-price").innerHTML = 24.99;
    document.getElementById("master-price").innerHTML = 39.99;
  } else {
    document.getElementById("basic-price").innerHTML = 199.99;
    document.getElementById("professional-price").innerHTML = 249.99;
    document.getElementById("master-price").innerHTML = 399.99;
  }
};
