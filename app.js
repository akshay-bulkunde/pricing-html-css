
const toggleButton = document.querySelector('#toggle-btn');
const cardOnePrice = document.querySelector('.price-value');
const cardTwoPrice = document.querySelector('.price-value-two');
const cardThreePrice = document.querySelector('.price-value-three');

console.log(cardOnePrice.innerText);
console.log(cardTwoPrice.innerText);
console.log(cardThreePrice.innerText);

toggleButton.addEventListener('change', (event) => {

    if(toggleButton.checked === false) {
        cardOnePrice.innerText = 199.9;
        cardTwoPrice.innerText = 249.99;
        cardThreePrice.innerText = 399.99;
    } else if(toggleButton.checked === true) {
        cardOnePrice.innerText = 19.9;
        cardTwoPrice.innerText = 24.99;
        cardThreePrice.innerText = 39.99;
    }
});