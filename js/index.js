
document.addEventListener("DOMContentLoaded", () => {

  console.log(productCard)

  const addRenderCard = (prod) => `
<div class="product__container">
    <a href="#modal-2" class="product__info js-modal-open">Выбрать</a>
    <h2 class="product__name">${prod.title}</h2>
    <h2 class="product__deck">${prod.deck}</h2>

    <div class="product__Price0nlyModal">${prod.price}</div>
    <img class="product__img" src="${prod.img}" alt="">
</div>
`
  const cardRender = (arrayCard, selector) => {
    let htmlRED = arrayCard.map(prod => addRenderCard(prod)).join('')
    document.querySelector(selector).innerHTML = htmlRED
  }

  const addModalCart = (cart) => `
  <button class="modal__right-sections-button">
    <img class="modal__right-sections-img" src="${cart.img}">
    <h2 class="modal__right-sections-title">${cart.title}</h2>
    <span class="modal__right-sections-money">${cart.price}</span></span>
  </button>
`

  const cardModalRender = (arrayCard, selector) => {
    let htmlRED = arrayCard.map(prod => addModalCart(prod)).join('')
    document.querySelector(selector).innerHTML = htmlRED
  }


  cardRender(productCard, '.productsCard')
  cardModalRender(cartModal, '.modal__right-sections')




})
