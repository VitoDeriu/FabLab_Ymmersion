document.addEventListener('DOMContentLoaded', function() {
    // Validation du formulaire d'inscription
    const registerForm = document.querySelector('form[action="/auth/register"]');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Les mots de passe ne correspondent pas');
            }
        });
    }

    // Gestion des erreurs de formulaire
    const errorDiv = document.querySelector('.bg-red-100');
    if (errorDiv) {
        setTimeout(() => {
            errorDiv.style.opacity = '0';
            setTimeout(() => errorDiv.remove(), 300);
        }, 5000);
    }
});
