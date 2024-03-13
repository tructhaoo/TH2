document.getElementById('icon-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var icon = document.querySelector('#icon-password i');
    
    var showPassword = confirm('Bạn muốn hiện mật khẩu');
    
    if (showPassword) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';  
    }
});
