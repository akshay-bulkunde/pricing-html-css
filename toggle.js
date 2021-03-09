const toggle=document.getElementById('toggle');
const convert=document.getElementById('convert');
toggle.addEventListener('change',(e)=>{
    convert.classList.toggle('show-monthly');
})