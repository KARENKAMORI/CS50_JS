let counter = 0;

function count(){
    counter++;
    if (counter % 10 === 0){
        alert(`Counter is now ${counter}`);
    }
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', count)
})