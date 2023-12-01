const productsArray = JSON.parse(localStorage.getItem("products"))
const cardContainer = document.querySelector(".card-container")


function pintarProductos(arrayPintar) {
    cardContainer.innerHTML = ""
    arrayPintar.forEach ((prod, index) => {
    cardContainer.innerHTML += 
` <div class="card">
    <header class="cass-header">
            <img class="card-img" src=${prod.image} alt="">
    </header>
    <div class="card-body">
        <p class="card-name">${prod.fullname}</p>
        <p class="card-description">${prod.description}</p>
            <div class="card-values">
                <div class="card-oldprice">$${prod.oldprice}</div>
                <div class="card-newprice">$${prod.newprice}</div>
            </div>    
    </div>
    <footer class="card-footer">
        <button class="card-btn">Agregar al carrito</button>
        <button class="card-btn vermas-btn" onclick="verMas('${prod.id}')">Ver mas</button>
    </footer>
</div>`
})
}

pintarProductos(productsArray)