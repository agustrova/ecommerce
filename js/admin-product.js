const productsArray = JSON.parse(localStorage.getItem("products"))
const tableBody = document.getElementById('table-body')
const productForm = document.querySelector("form#product-form")
const submitBtn = productForm.querySelector('button[type=submit].btn-form')
console.log(productsArray[0])

function pintarProductosAdmin(arrayPintarProductos) {
    tableBody.innerHTML = ""
    arrayPintarProductos.forEach ((product, index) => {
        tableBody.innerHTML += `
        <tr class="table-body">
        <td class="user-image">
            <img class="product-img" src="${product.image}">
        </td>
        <td class="product-name">${product.fullname}</td>
        <td class="product-descrption">${product.description}</td>
        <td class="product-category">${product.category}</td>
        <td class="product-oldprice">$${product.oldprice}</td>
        <td class="product-newprice">$${product.newprice}</td>
        <td>
        <div class="btn-editarProduct">
        <button class="action-btn btn-danger" title="Borrar Producto" onclick="borrarProducto('${product.id}', '${product.fullname}')">
        <i class="btn-borrar fa-solid fa-trash-can"></i>
        </button>
        <button class="action-btn"
                title="Editar producto"
                onclick="editarProducto('${product.id}')">
                <i class="btn-editar fa-solid fa-pen-to-square"></i>
        </button>
        </div>
        </td>
        </td>
    </tr>`
})
}



const searchInputProduct = document.querySelector('#search')
const contadorSpan = document.querySelector('.productos-buscados')

searchInputProduct.addEventListener('keyup', (eventito) => {
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
    const mensaje = cantidadProductos === 1 ? '(1 producto)' : `(${cantidadProductos} productos)`
    contadorSpan.textContent = mensaje

    pintarProductosAdmin(productosFiltrados)
})

productForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const el = evt.target.elements
    
    const productExist = productsArray.find((product) => {
    if (product.fullname === el.fullname.value)
    return true
    })  
    
    if(productExist && el.id.value !== productExist.id) {
    swal.fire ({
        title: "El producto ya existe",
        icon: "error"
    })
    return
    }
    
    const id = el.id.value ? el.id.value : crypto.randomUUID()  
    
    const product = {
        fullname: el.fullname.value,
        description: el.description.value,
        id: el.id.value,
        oldprice: el.oldprice.value,
        newprice: el.newprice.value, 
        image: el.image.value,
        category: el.category.value,
    }
    
    if (el.id.value) {
    const indice = productsArray.findIndex(product => {
        if(product.id === el.id.value) {
        return true
        }
    })

    productsArray[indice] = product
    Swal.fire({
        title: 'Producto editado',
        text: 'Los datos del producto fueron actualizados correctamente',
        icon:'success',
        timer: 1000,
    })
    
    } else {
    productsArray.push(product)
    Swal.fire({
    title: 'Producto agregado',
    text: 'El producto se creó correctamente',
    icon: 'success',
    timer: 1000,
    })
    }
    
    pintarProductosAdmin(productsArray)
    actualizarLocalStorage()
    resetearFormulario()
    } )
    
    function resetearFormulario() {
    userForm.reset() 
    submitBtn.classList.remove ('btn-edit')
    submitBtn.innerText = 'Agregar producto'
    productForm.elements.nombreCompleto.focus()
    }
    
    function actualizarLocalStorage () {
    localStorage.setItem("products", JSON.stringify(productsArray))
    }
    
    function borrarProducto (ID, nombre) {
    Swal.fire({
        title: `Querés borrar el producto "${nombre}"?`,
        icon: "warning",
        showCancelButton: "true",
        cancelButtonText: "No",
        confirmButtonColor: "#3085d6",
        reverseButtons: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar"
    }).then(result => {
        if(result.isConfirmed) {
        const indice = productsArray.findIndex(product => product.id === ID)
    
        productsArray.splice(indice, 1)
        pintarProductosAdmin(productsArray)
    
        actualizarLocalStorage()
        }
    })
    
    }
    
    function editarProducto(idBuscar) {
    const productEdit = productsArray.find((producto) => {
        if(producto.id === idBuscar) {
        return true
        }
    })
    
    if(!productEdit) {
        Swal.fire('Error', 'No se pudo editar el producto', 'error')
        return
    }
    
    console.log(productEdit)
    const el = productForm.elements
    el.id.value = productEdit.id
    el.fullname.value = productEdit.fullname
    el.description.value = productEdit.description
    el.oldprice.value = productEdit.oldprice
    el.newprice.value = productEdit.newprice
    el.image.value = userEdit.image
    el.category.value = userEdit.category

    submitBtn.classList.add('btn-edit')
    submitBtn.innerText = 'Editar producto'
    
    
    }
    
    pintarProductosAdmin(productsArray)


