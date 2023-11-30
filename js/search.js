const searchInput = document.querySelector('#search') 


searchInput.addEventListener ('keyup', (eventito) => {
    const inputValue = eventito.target.value.toLowerCase()
    const productosFiltrados = 
    productStart.filter((usuario) => {
    const nombre = usuario.fullname.toLowerCase()
    return nombre.includes(inputValue) 
    })
    pintarProductos(productosFiltrados)
})