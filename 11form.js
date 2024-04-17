document.addEventListener('DOMContentLoaded', function(){

    //getting the form
    document.querySelector('form').onsubmit = function() {
        // getting whatever the user typed into the input field
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}!`);
    };

});