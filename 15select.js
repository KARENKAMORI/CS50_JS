document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('select').onchange = function(){
        // use fontWeight instead of font-weight, Javascript uses camelCase
        document.querySelector('#hello').style.fontWeight = this.value;
    }
});