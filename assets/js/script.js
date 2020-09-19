let buttonsContainer = document.querySelector('.page-content');
let cartCaunterLabel = document.querySelector('#cart-counter');
let cartCaunter = 0;
let cartPrice = 0;

let btnClickHandler = (event) => {
  let target = event.target;
  if (target.classList.contains('item-actions__cart')){
    cartCaunterLabel.innerHTML = ++cartCaunter;
    if(cartCaunter === 1) cartCaunterLabel.style.display = 'block';
    const priceData = +target.parentElement.previousElementSibling.innerHTML
      .replace(/^\$(\d+)\s\D+(\d+).*$/u, '$1.$2');
    cartPrice = Math.round((cartPrice + priceData) * 100) /100;

    let restoreBtn = target.innerHTML;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;
    target.disabled = true;
    buttonsContainer.removeEventListener('click', btnClickHandler);


     setTimeout(() => {
       target.innerHTML = restoreBtn;
       target.disabled = false;
       buttonsContainer.addEventListener('click', btnClickHandler);
     }, 2000)
  }
}

buttonsContainer.addEventListener('click', btnClickHandler);