document.addEventListener('DOMContentLoaded', function(){
    // By default, the submit button should be disabled when you first load the page
    document.querySelector('#submit').disabled = true;

    // Enabling the key when user starts typing
    document.querySelector('#task').onkeyup = () => {
        // checks whether there is input just incase the user types in and then deletes input, it shouldn't allow empty inputs
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        } else{
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        // create a new element
        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        // clearing up the input field
        document.querySelector('#task').value = '';

        // disable the submit button once you have submitted your input
        document.querySelector('#submit').disabled = true;

        // stop form from submitting
        return false;
    }
});