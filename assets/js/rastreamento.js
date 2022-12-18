function rastrear() {
    var codigo = document.getElementById("codRastreio").value;
    if (codigo === "" || codigo === null) {
        document.getElementById("alerta").style.display = "block";
        new Vue({
            el: "#alerta",
            data: {
                msg: "Informe um código de rastreio!"
            }});
        return;
    }
    document.getElementById("alerta").style.display = "none";
    var rastreio = "http://www.linkcorreios.com.br/?id=" + codigo;
    window.open(rastreio);
}