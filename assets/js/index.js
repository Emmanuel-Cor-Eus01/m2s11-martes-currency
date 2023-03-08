
(() => {
    // TODO EL CODIGO VA AQUI EN LA FUNCION ANONIMA
    console.log("Entro a mi funcion anonima");
    document.getElementById("ConvertButton").addEventListener("click", convertir);
    document.getElementById("InformationButton").addEventListener("click", showInformation);
    const currencyFrom = document.getElementById("currencyFrom");
    const currencyTo = document.getElementById("currencyTo");
    const amountFrom = document.getElementById("amountFrom");
    const amountTo = document.getElementById("amountTo");

    function convertir(){
        console.log("Se hizo click en el boton convertir");
        console.log(currencyFrom.value, "currencyFrom");
        console.log(currencyTo.value, "currencyTo");
        console.log(amountFrom.value, "amountFrom");
        console.log(amountTo.value, "amountTo");

        // Esto es una llamada HTTP de tipo GET
        let url =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom.value}/${currencyTo.value}.json`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data, "response data");
            let result = data[currencyTo.value] * amountFrom.value;
            amountTo.value = result.toFixed(2);
            console.log(result);
            // como hago esto con aync y await
            // como cargo dinamicamente los select

        });
    }
    function showInformation(){
        console.log("Se hizo click en el boton informacion");
    }
})();