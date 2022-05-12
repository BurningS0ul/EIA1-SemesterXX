//defining values

const EU = {
    ALL: 447.01,
    DE: "Deutschland",
    GER21: 83.2,
    GER08: 82.0,
    ITA: "Italien",
    ITA21: 59.58,
    ITA08: 59.0,
    FRA: "Frankreich",
    FRA21: 65.3,
    FRA08: 62.14,
    SPA: "Spanien",
    SPA21: 47.16,
    SPA08: 45.98

}

//defining texts

const x = "Gesamtzahl Einwohnerinnen und Einwohner in ";
const x2 = " im Jahr 2021";
const x3 = ": ";
const x4 = " Mio"
const y = "Relativ zur Gesamtzahl der EU: ";
const y2 = "%";
const z = "Wachstumsrate seit 2008: ";
const z2 = "Wachstumsrate gesamt zwischen 2008 und 2021: ";

//EU functions

function GERMANY() {    

    document.getElementById("num").innerHTML = EU.GER21 + x4;
    document.getElementById("country").innerHTML = x + EU.DE +x2;

    document.getElementById("total").innerHTML = Math.abs((EU.GER21/EU.ALL)*100).toFixed(2) + y2;
    document.getElementById("percent").innerHTML = Math.abs(EU.GER08/EU.GER21).toFixed(2) + y2;
    document.getElementById("rate").innerHTML = Math.abs(EU.GER21-EU.GER08).toFixed(2) + x4;
    document.querySelector(".chartWrapper .chart").innerHTML = Math.abs((EU.GER21/EU.ALL)*100).toFixed(2);
    
    document.querySelector('.wrapper').classList.add('active');
}

function ITALY(){    

    document.getElementById("num").innerHTML = EU.ITA21 + x4;
    document.getElementById("country").innerHTML = x + EU.ITA +x2;

    document.getElementById("total").innerHTML = Math.abs((EU.ITA21/EU.ALL)*100).toFixed(2) + y2;
    document.getElementById("percent").innerHTML = Math.abs(EU.ITA08/EU.ITA21).toFixed(2) + y2;
    document.getElementById("rate").innerHTML = Math.abs(EU.ITA21-EU.ITA08).toFixed(2) +x4;
    document.querySelector(".chartWrapper .chart").innerHTML = Math.abs((EU.ITA21/EU.ALL)*100).toFixed(2);

    document.querySelector('.wrapper').classList.add('active');
}

function FRANCE(){

    document.getElementById("num").innerHTML = EU.FRA21 + x4;
    document.getElementById("country").innerHTML = x + EU.FRA +x2;

    document.getElementById("total").innerHTML = Math.abs((EU.FRA21/EU.ALL)*100).toFixed(2) + y2;
    document.getElementById("percent").innerHTML = Math.abs(EU.FRA08/EU.FRA21).toFixed(2);
    document.getElementById("rate").innerHTML = Math.abs(EU.FRA21-EU.FRA08).toFixed(2);
    document.querySelector(".chartWrapper .chart").innerHTML = Math.abs((EU.FRA21/EU.ALL)*100).toFixed(2);

    document.querySelector('.wrapper').classList.add('active');
}

function SPAIN(){    

    document.getElementById("num").innerHTML = EU.SPA21 + x4;
    document.getElementById("country").innerHTML = x + EU.SPA +x2;

    document.getElementById("total").innerHTML = Math.abs((EU.SPA21/EU.ALL)*100).toFixed(2);
    document.getElementById("percent").innerHTML = Math.abs(EU.SPA08/EU.SPA21).toFixed(2);
    document.getElementById("rate").innerHTML = Math.abs(EU.SPA21-EU.SPA08).toFixed(2);
    document.querySelector(".chartWrapper .chart").innerHTML = Math.abs((EU.SPA21/EU.ALL)*100).toFixed(2);


    document.querySelector('.wrapper').classList.add('active');
}   

//load functions

window.addEventListener("load", function(){
    document.querySelector(".germany").addEventListener('click', GERMANY);    
    document.querySelector(".italy").addEventListener('click', ITALY);
    document.querySelector(".france").addEventListener('click', FRANCE);
    document.querySelector(".spain").addEventListener('click', SPAIN);
});

