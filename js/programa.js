let cantidadLeyendas;

var arregloDatos = [];


function agregarDato() {

    cantidadLeyendas = document.getElementsByClassName("dato").length;
    //le sumo 1 
    cantidadLeyendas++;


    const dato = document.createElement("div");
    dato.className= "dato";


    const inputLeyenda = document.createElement("input");
    inputLeyenda.type = "text";
    inputLeyenda.className = "serie";
    inputLeyenda.placeholder= "Leyenda" + cantidadLeyendas;
    //agrego el input al div datos
    dato.appendChild(inputLeyenda);
    document.getElementById("datos").appendChild(dato);


    const inputValor = document.createElement("input");
    inputValor.type= "text";
    inputValor.className = "valor";
    inputValor.placeholder= "Valor " + cantidadLeyendas;
    //agrego el input al div datos
    dato.appendChild(inputValor);
    document.getElementById("datos").appendChild(dato);
   
}

//funcion que carga e; grafico de Google

function cargarGrafico() {

    //Cargo el grafico de Google
    google.charts.load ('current', {
        'packages': ['corechart']   
    });

    google.charts.setOnLoadCallback(drawChart);

}



//Dibujo el grafico y coloco los valores

function drawChart(){
    arregloDatos= [];
    var datos=document.getElementById("datos").getElementsByTagName("input");

    //control que todos los input tengan un valor cargado
    for(i = 0; i < datos.length; i++){

        if (datos[i].value === ""){
            alert("Cargue todos los campos");
            return;
        }
    }

    var t = ['Grafico', ''];
    arregloDatos.push(t);

    for (i = 0; i < datos.length; i = i + 2) {

        t=[datos[i].value, parseInt(datos[i + 1]. value)];
        arregloDatos.push(t);

    }

    var data = google.visualization.arrayToDataTable (arregloDatos);

    //optional; Agrego titulo del grafico
    var options= {

        'title' : document.getElementById("titulo").value,
        'width' : 600,

    };

    if (document.getElementById("tipo").value == "circular"){

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);

    }else {
        var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }





}