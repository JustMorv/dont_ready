
document.addEventListener("DOMContentLoaded", () => {

  console.log(productCard)

const addRenderCard = (prod)=>`
<div class="product__container">
    <a href="#modal-2" class="product__info js-modal-open">Выбрать</a>
    <h2 class="product__name">${prod.title}</h2>
    <h2 class="product__deck">${prod.deck}</h2>

    <div class="product__Price0nlyModal">${prod.price}</div>
    <img class="product__img" src="${prod.img}" alt="">
</div>
`
const cardRender = (arrayCard, selector) =>{			
  console.log(arrayCard)

	let htmlRED = arrayCard.map(prod => addRenderCard(prod)).join('')
	document.querySelector(selector).innerHTML = htmlRED
}


cardRender(productCard,'.productsCard')













})
