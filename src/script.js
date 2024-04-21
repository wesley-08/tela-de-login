const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', () => {
    if(email.value == 'admin@admin.com' & password.value == 1234){
        alert('Login successful')
    } else{
        alert('Login failed')
    }
})
