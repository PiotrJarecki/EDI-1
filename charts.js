fetch('https://my.api.mockaroo.com/projektglowny.json/?key=2155ed40')
  .then(response => response.json())
  .then(data => { 
    let tableData = '';

    data.map(values => { 
      tableData += `<tr>
        <td>${values.Model_buta}</td>
        <td>${values.Nazwa_producenta}</td>
        <td>${values.Rozmiar_buta}</td>
        <td>${values.Gwiazdki}</td>
        <td>${values.Cena}</td>
        <td>${values.Ilość_w_magazynie}</td>
        <td>${values.Ilość_sprzedanych}</td>
        <td>${values.Data_dodania}</td>
      </tr>`;
    });

    document.getElementById('table-body').innerHTML = tableData;

    // TABELA PIERWSZA
    const labels = data.slice(0, 10).map(item => item.Model_buta); 
    const values = data.slice(0, 10).map(item => item.Ilość_sprzedanych); 

    const ctx = document.getElementById('chart1').getContext('2d'); 
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number Sold',
          data: values
        }]
      }
    });

    // TABELA 2
    const starCounts = data.reduce((counts, shoe) => {
        counts[shoe.Gwiazdki] = (counts[shoe.Gwiazdki] || 0) + 1;
        return counts;
      }, {});

      const lab = Object.keys(starCounts);
      const val = Object.values(starCounts);
  
      const ctx2 = document.getElementById('chart2').getContext('2d');
      const chart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
          labels: lab,
          datasets: [{
            label: 'Number of Shoes',
            data: val,
          }]
        }
      });
  }); 