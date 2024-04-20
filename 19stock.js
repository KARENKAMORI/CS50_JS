document.addEventListener('DOMContentLoaded', function(){
    fetch('https://query1.finance.yahoo.com/v8/finance/chart/AAPL?interval=1d')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});