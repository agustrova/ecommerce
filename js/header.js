const headerNav = document.querySelector('.main-nav')
const userInfoHeader = document.getElementById('header-user')
const navList = document.querySelector('.nav-list')
const loguedUser = JSON.parse(localStorage.getItem('currentUser'))


if (loguedUser) {
    if(loguedUser.rol === 'Admin') {
        const userMenu = document.createElement ('li') 
        userMenu.classList.add('nav-item')
        userMenu.innerHTML = '<a href ="/pages/admin/user-admin.html" class="nav-link">Admin usarios</a>'
navList.appendChild(userMenu)


const productMenu = document.createElement ('li') 
productMenu.classList.add('nav-item')
productMenu.innerHTML = '<a href ="/pages/admin/product-admin.html" class="nav-link">Admin productos</a>'
navList.appendChild(productMenu)

    }

    const userNameHTML = userInfoHeader.querySelector('.user-name')

    userNameHTML.innerText = loguedUser.fullname

    const userImg = document.createElement('img')
    userImg.src = loguedUser.image
    userImg.alt = `${loguedUser.fullname} profile picture`
    userImg.classList.add('user-profile-picure')

    userInfoHeader.appendChild(userImg)


    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const logoutButton = document.createElement('button')
    logoutButton.classList.add('nav-link')
    logoutButton.innerText = 'Cerrar sesión'

    logoutButton.onclick = function() {

        localStorage.removeItem("currentUser")
        window.location.href = '/index.html'

    }

    userActionHTML.append(logoutButton)


} else {
    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const loginLink = document.createElement("a")
    loginLink.href = '/pages/login/login.html'
    loginLink.innerText = "Ingresar"
    loginLink.classList.add('header-link', 'nav-link')

    userActionHTML.appendChild(loginLink)
}