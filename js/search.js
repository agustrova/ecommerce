const searchInput = document.querySelector('#search') 

// Filtro de usuarios
//escuchar cuando el usuario selecciona una tecla en el input search

searchInput.addEventListener('keyup', (eventito) => {
    const inputValue = eventito.target.value.toLowerCase()
    productsArray.filter((prod) => {
        const name = prod.fullname.toLowerCase()
    
        return name.includes(inputValue) 


})

/*
searchInput.addEventListener ('keyup', (eventito) => {
    //obtener el valor del input
    const inputValue = eventito.target.value.toLowerCase()
    //buscar en todos los usuarios aquellos donde su nombre tengan este texto
    const usuariosFiltrados = 
    usersArray.filter((usuario) => {
    
    const nombre = usuario.fullname.toLowerCase()
    
    return nombre.includes(inputValue) 
    })

    */