let hamMenu = document.getElementById("hmenu");
let normalMenu = document.getElementById("nmenu");
let quotesel = document.getElementById("quoteid");

hamMenu.onclick = function () {
    if (normalMenu.className == 'normalmenu') {
        normalMenu.className = 'hamburgermenu';
        quotesel.className = 'quote quotepostioned';
    }

    else if(normalMenu.className=='hamburgermenu'){
        normalMenu.className = 'normalmenu';
        quotesel.className = 'quote';
    }
}    
