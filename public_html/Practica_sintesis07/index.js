/* global html */

function infoscreen() {
    var div = document.getElementById("screen");
   
   var html = "<li>Altura total de la pantalla: " + screen.availWidth + "</li>";
    html += "<li>Anchura total de la pantalla: " + screen.availHeight + "</li>";
    html += "<li>Color de la pantalla: " + screen.colorDepth + "</li>";
    html += "<li>Anchura pantalla: " + screen.height + "</li>";
    html += "<li>Resolucion color de la pantalla: " + screen.pixelDepth + "</li>";
    html += "<li>Anchura de la pantalla: " + screen.width + "</li>";

    html += "</li>";
    
    div.innerHTML = html;
}








