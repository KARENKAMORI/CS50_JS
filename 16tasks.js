document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        // create a new element
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        // clearing up the input field
        document.querySelector('#task').value = '';

        // stop form from submitting
        return false;
    }
});