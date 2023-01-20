
    fetch("https://my.api.mockaroo.com/p_rojekt_.json/?key=22355650").then((data)=>{
        //console.log(data); - json format
        return data.json(); //converted to object
    }).then((objectData)=>{
        console.log(objectData[0].Model_buta);
        let tableData="";
        objectData.map((values)=>{
            tableData+=`<tr>
            <td>${values.id}</td>
            <td>${values.Model_buta}</td>
            <td>${values.Nazwa_producenta}</td>
            <td>${values.Rozmiar_buta}</td>
            <td>${values.Płeć}</td>
            <td>${values.Ocena}</td>
            <td>${values.Cena}</td>
            <td>${values.Limitowana_edycja}</td>
            <td>${values.Ilość_w_magazynie}</td>
            <td>${values.Ilość_sprzedanych}</td>
            <td>${values.Data_dodania}</td>
        </tr>`;
        });
        document.getElementById("table_body").innerHTML=tableData;
    }).catch((err)=>{
        console.log(err);
    })



