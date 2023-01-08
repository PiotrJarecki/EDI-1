// "https://my.api.mockaroo.com/p_rojekt_.json/?key=22355650"
//<td>${values.id}</td>
//<td>${values.Model_buta}</td>
//<td>${values.Nazwa_producenta}</td>
//<td>${values.Rozmiar_buta}</td>
//<td>${values.Płeć}</td>
//<td>${values.Ocena}</td>
//<td>${values.Cena}</td>
//<td>${values.Limitowana_edycja}</td>
//<td>${values.Ilość_w_magazynie}</td>
//<td>${values.Ilość_sprzedanych}</td>
//<td>${values.Data_dodania}</td>

//fetch data

async function apiData(){
    const apiLink = "https://my.api.mockaroo.com/p_rojekt_.json/?key=22355650";

    const response = await fetch(apiLink)
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

// let Opinia = [];
//let Płeć = [];




// const opinie = datapoints.map((amount) => amount.Ocena)
   
//Opinia = opinie

//const plecklienta = datapoints.map((plec) => plec.Płeć)

//Płeć = plecklienta