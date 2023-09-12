const url = "https://api.kanye.rest/";

async function api() {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
        createMessage(data.msg);
    } catch(error) {
        console.log("Problema interno!");
    }   
}
api();

function createMessage(msg) {
    document.getElementById("message").innerHTML = `
        <button onClick="loadMessage(this.value)">
            ${Object.keys(msg).map(function (message) {
                return `<div>${message}</div>`
            }).join('')}
        </button>
    `
}

async function loadMessage(mensagem) {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
}