console.log("Script app.js cargando")

const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';
function fetchQuote(){
    console.log("intentandoobtener una cita...");
    fetch(API_URL)
    .then (response => {
        console.log("Respuesta recibida:", response);
        if (!response.ok){
            throw new Error(`Error en la respuesta: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log("Datos obtenidos", data);
        displayQuote(data);
    })

    .catch(error => console.error('Error al obtener la cita:', error));
}


function displayQuote(quoteData){
    const container = document.getElementById('quote-container');
    container.innerHTML = `
    <p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>`;
    

    console.log("Cita mostrada correctamente")
}

fetchQuote();