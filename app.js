const onClick = document.getElementById("toggle-bar");

onClick.addEventListener("click", clickFunction);

function clickFunction() {
    let monthlyData = document.getElementsByTagName("h3");
    let annualData = document.getElementsByTagName("h4");

    for (let index = 0; index < monthlyData.length; index++) {
            if (monthlyData[index].style.display === "none") {
                monthlyData[index].style.display = "block";
                annualData[index].style.display = "none";
                button.style.justifyContent = "flex-end"
            } else {
                monthlyData[index].style.display = "none";
                annualData[index].style.display = "block";
                button.style.justifyContent = "flex-start"
            }
    }


}
