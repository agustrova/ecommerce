const currentUser=JSON.parse(localStorage.getItem('currentUser'))

if(!currentUser  || currentUser.role !== 'Admin'){
window.location.href='/index.html'
}
