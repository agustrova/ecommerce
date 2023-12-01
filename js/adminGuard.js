const currentUser=JSON.parse(localStorage.getItem('currentUser'))

if(!currentUser  || currentUser.rol !== 'Admin'){
window.location.href='/index.html'
}
