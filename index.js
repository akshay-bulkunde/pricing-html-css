const toggle = document.getElementById('togglebutton');
const boxContainer = document.getElementById('boxes-container');

toggle.addEventListener('change',(e)=>{
    boxContainer.classList.toggle('show-monthly')
});