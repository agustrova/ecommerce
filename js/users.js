const usersArray = JSON.parse(localStorage.getItem("users"))
const tableBody = document.getElementById('table-body')

const searchInput = document.querySelector('#search') 
const userForm = document.querySelector("form#user-form")
const submitBtn = userForm.querySelector('button[type=submit].btn-form')

function pintarUsuarios(arrayPintar) {
tableBody.innerHTML = ""
arrayPintar.forEach ((user, index) => {

    tableBody.innerHTML += `
    <tr class="table-body">
        <td class="user-image">
            <img class="user-avatar" src="${user.image}" alt="imagen">
        </td>
        <td class="user-name">${user.fullname}</td>
        <td class="user-email">${user.email}</td>
        <td class="user-location">${user.location}</td>
        <td class="user-age">${user.age}</td>
        <td class="user-date">${formatDate (user.bornDate)}</td>
        <td class="user-rol">${user.rol}</td>
        <td> 
        <div class="btn-editarUser">
        <button class="action-btn btn-danger" title="Borrar usuario" onclick="borrarUsuario('${user.id}', '${user.fullname} ')">
        <i class="btn-borrar fa-solid fa-trash-can"></i>
        </button>
        <button class="action-btn"
                title="Editar usuario"
                onclick="editarUsuario('${user.id}')">
                <i class="btn-editar fa-solid fa-pen-to-square"></i>
        </button>
        </div>

        </td>
    </tr>`
})

}



const searchInputUser = document.querySelector('#search') 

searchInputUser.addEventListener ('keyup', (eventito) => {
    const inputValue = eventito.target.value.toLowerCase()
    const usuariosFiltrados = 
    usersArray.filter((usuario) => {
    const nombre = usuario.fullname.toLowerCase()
    return nombre.includes(inputValue) 
    })
    pintarUsuarios(usuariosFiltrados)
})


userForm.addEventListener("submit", (evt) => {
evt.preventDefault()
const el = evt.target.elements

if(el.password.value !== el.password2.value) {
alert(`Las contraseñas no coinciden`)
return
}

const emailExist = usersArray.find((user) => {
if (user.email === el.email.value)
return true
})

if(emailExist && el.id.value !== emailExist.id) {
swal.fire ({
    title: "El correo ya existe",
    icon: "error"
})
return
}

const id = el.id.value ? el.id.value : crypto.randomUUID()  

const user = {
fullname: el.fullname.value,
age: el.age.valueAsNumber, 
email: el.email.value,
password: el.password.value,
password2: el.password2.value,
active: el.active.checked,
bornDate: new Date (el.bornDate.value).getTime(),
location: el.location.value,
rol: el.rol.value,
id: id,
image: el.image.value,
}

if (el.id.value) {
const indice = usersArray.findIndex(usuario => {
    if(usuario.id === el.id.value) {
    return true
    }
})
usersArray[indice] = user
Swal.fire({
    title: 'Usuario editado',
    text: 'Los datos del usuario fueron actualizados correctamente',
    icon:'success',
    timer: 1000,
})

} else {
usersArray.push(user)
Swal.fire({
title: 'Usuario Agregado',
text: 'Usuario se creo correctamente',
icon: 'success',
timer: 1000,
})
}

pintarUsuarios(usersArray)
actualizarLocalStorage()
resetearFormulario()
} )

function resetearFormulario() {
userForm.reset()
userForm.elements.password.disabled = false
userForm.elements.password2.disabled = false 
submitBtn.classList.remove ('btn-edit')
submitBtn.innerText = 'Agregar usuario'
userForm.elements.nombreCompleto.focus()
}

function actualizarLocalStorage () {
localStorage.setItem("users", JSON.stringify(usersArray))
}

function borrarUsuario (ID, nombre) {
Swal.fire({
    title: `Querés borrar a ${nombre}?`,
    icon: "warning",
    confirmCancelButton: "No",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    reverseButtons: true,
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar!"
}).then(result => {
    if(result.isConfirmed) {
    const indice = usersArray.findIndex(user => user.id === ID)

    usersArray.splice(indice, 1)
    pintarUsuarios(usersArray)

    actualizarLocalStorage()
    }
})

}

function editarUsuario(idBuscar) {
const userEdit = usersArray.find((usuario) => {
    if(usuario.id === idBuscar) {
    return true
    }

})

if(!userEdit) {
    Swal.fire('Error', 'No se pudo editar el usuario', 'error')
    return
}

console.log(userEdit)
const el = userForm.elements
el.id.value = userEdit.id
el.age.value = userEdit.age
el.fullname.value = userEdit.fullname
el.email.value = userEdit.email
el.image.value = userEdit.image
el.location.value = userEdit.location
el.active.checked = userEdit.active
el.rol.value = userEdit.rol
el.password.value = userEdit.password
el.password.disabled = true
el.password2.value = userEdit.password


el.password2.disabled = true
el.bornDate.value = formatInputDate(userEdit.bornDate)

console.log(formatInputDate(userEdit.bornDate))
submitBtn.classList.add('btn-edit')
submitBtn.innerText = 'Editar usuario'


}

pintarUsuarios(usersArray)