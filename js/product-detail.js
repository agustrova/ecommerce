
const productoElegido = JSON.parse(localStorage.getItem("currentProduct"))
const cardDetail = document.querySelector(".card-detail")

function productDetail() {
    productsArray.find((product) => {
        if (product.id === productoElegido.id) {
            cardDetail.innerHTML = `<article class="card-vermas">
            <img class="img-vermas" src=${product.image} alt="">
            <div class="info-vermas">
        <p class="name-vermas">${product.fullname}</p>
        <p class="description-vermas">${product.description}</p>
            <div class="values-vermas">
                <div class="card-oldprice">$${product.oldprice}</div>
                <div class="card-newprice">$${product.newprice}</div>
            </div>    
    <footer class="card-footer">
        <button class="card-btn">Agregar al carrito</button>
    </footer>
    </div>
</article>
            `



        }
    })

}

productDetail()

function verMas(productoElegido) {
    const product=productsArray.find((product)=>{
        return product.id === productoElegido

    })
    window.location.href = '/pages/product-detail/product-detail.html'
    localStorage.setItem('currentProduct', JSON.stringify(product))
}