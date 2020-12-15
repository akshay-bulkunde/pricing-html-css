window.onload = () =>{
    document.getElementsByClassName('slider')[0].addEventListener('click', toggleFn)
}

function toggleFn(){
    if(this.classList.toggle('active')){
        document.getElementsByClassName('btn')[0].style = "margin-left: 35px;"
        document.getElementById("basic_price").innerText = "19.99"
        document.getElementById("professional_price").innerText = "24.99"
        document.getElementById("master_price").innerText = "39.99"


    }else{
        document.getElementsByClassName('btn')[0].style = "margin-left: 5px;"
        document.getElementById("basic_price").innerText = "199.99"
        document.getElementById("professional_price").innerText = "249.99"
        document.getElementById("master_price").innerText = "399.99"
    }
}