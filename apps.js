//fetch data


//----------------------------------------------------------------------------
async function apiData1(){
    

    const response = await fetch('dane2.json')
    const datapoints = await response.json()
    console.log(datapoints);

    const klientdata = datapoints.map((klient) => {
        console.log(klient)
        if (klient.id < 10) {
          Opinia.push(klient.Ocena)
         Płeć.push(klient.Płeć)
       }
   })
}

// ---------------------------------------------------------------------------

async function apiData2(){

    const response = await fetch('dane3.json')
    const datapoints = await response.json()
    console.log(datapoints);

    const sprzedazdata = datapoints.map((sprzedaz) => {
        console.log(sprzedaz)
        if (sprzedaz.id < 10) {
            Sprzedane.push(sprzedaz.Ilość_sprzedanych)
            Model.push(sprzedaz.Model_buta)
        }
    })
}

//----------------------------------------------------------------------------
// let Opinia = [];
//let Płeć = [];
//1