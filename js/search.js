const searchInput = document.querySelector('#search')
const contadorSpan = document.querySelector('.productos-buscados')

searchInput.addEventListener('keyup', (eventito) => {
    const inputValue = eventito.target.value.toLowerCase()

    if (inputValue === '') {
        contadorSpan.textContent = ''
        pintarProductos([])
        return
    }
    
    const productosFiltrados = productsArray.filter((producto) => {
        const nombre = producto.fullname.toLowerCase()
        return nombre.includes(inputValue)
    })

    const cantidadProductos = productosFiltrados.length
    const mensaje = cantidadProductos === 1 ? `(1 producto)` : `(${cantidadProductos} productos)`
    contadorSpan.textContent = mensaje

    pintarProductos(productosFiltrados)
})