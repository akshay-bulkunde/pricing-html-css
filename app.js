
const toggleButton = document.querySelector('#toggle-btn');
const cardOnePrice = document.querySelector('.price-value-one');
const cardTwoPrice = document.querySelector('.price-value-two');
const cardThreePrice = document.querySelector('.price-value-three');

function updatePriceUsingToggle() {
    
    if(toggleButton.checked === false) {

        cardOnePrice.innerText = 199.9;
        cardTwoPrice.innerText = 249.99;
        cardThreePrice.innerText = 399.99;
    } else if(toggleButton.checked === true) {
        
        cardOnePrice.innerText = 19.99;
        cardTwoPrice.innerText = 24.99;
        cardThreePrice.innerText = 39.99;
    }
}

updatePriceUsingToggle();

toggleButton.addEventListener('change', (event) => {

    updatePriceUsingToggle();
});