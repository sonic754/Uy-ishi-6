fetch('https://dummyjson.com/product')
.then(product => product.json())
.then(cards => cards.products.map(item =>{
    const parent = document.getElementById('parent')
    const div = document.createElement('div')
    div.innerHTML = `
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.title}</h2>
    <p>${item.description}</p>
    <p><span>category ${item.category}   </span> <span>${item.price} $</span></p>
    <p>brand ${item.brand}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `

    parent.appendChild(div)
}))