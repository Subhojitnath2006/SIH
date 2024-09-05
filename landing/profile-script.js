document.querySelector('.edit-icon').addEventListener('click', function() {
    document.getElementById('name').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');
});

document.querySelector('.logout-button').addEventListener('click', function() {
    // Add your logout functionality here
    alert('Logged Out');
});
