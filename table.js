fetch('https://my.api.mockaroo.com/projektglowny.json/?key=2155ed40')
.then(response => response.json())
.then(data => {
// wykres pierwszy
const chartData = {
    labels: data.map(item => item.label),
    datasets: [{
      label: 'Wartość',
      data: data.map(item => item.value)
    }]
  };

 
  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
    
    }
  });
});

//wykres drugi 
fetch.get('https://my.api.mockaroo.com/projektglowny.json?key=2155ed40')
  .then(response => {
   
    const chartData = {
      columns: [
        ['label'].concat(response.data.map(item => item.label)),
        ['value'].concat(response.data.map(item => item.value))
      ]
    };

   
    const chartElement = document.getElementById('myChart');

   
    const chart = bb.generate({
      data: chartData,
      bindto: chartElement,
      
    });
  });