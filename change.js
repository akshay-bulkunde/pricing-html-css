function change(){
    document.getElementById("switch").addEventListener("change",(event)=>{
        if(event.target.checked){
        document.getElementById("basicPrice").innerHTML= "&dollar;19.99";
        document.getElementById("professionalPrice").innerHTML= "&dollar;24.99";
        document.getElementById("masterPrice").innerHTML= "&dollar;39.99";
        document.getElementById("basic").classList.remove("basic","basicMonthly");
        document.getElementById("basic").classList.add("basicMonthly");
        document.getElementById("professional").classList.remove("professional","professionalMonthly");
        document.getElementById("professional").classList.add("professionalMonthly");
        document.getElementById("master").classList.remove("master","masterMonthly");
        document.getElementById("master").classList.add("masterMonthly");
        }
        else{
        document.getElementById("basicPrice").innerHTML= "&dollar;199.99";
        document.getElementById("professionalPrice").innerHTML= "&dollar;249.99";
        document.getElementById("masterPrice").innerHTML= "&dollar;399.99";
        document.getElementById("basic").classList.remove("basic","basicMonthly");
        document.getElementById("basic").classList.add("basic");
        document.getElementById("professional").classList.remove("professional","professionalMonthly");
        document.getElementById("professional").classList.add("professional");
        document.getElementById("master").classList.remove("master","masterMonthly");
        document.getElementById("master").classList.add("master");
        }
    })
}

