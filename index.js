const url = "https://api.kanye.rest/";
const messageButton = document.getElementById("msg-btn");
const message = document.getElementById("mensagem");

async function api() {
    try {
        messageButton.addEventListener('click', () => {
            axios.get(url).then((res) => {
                const msg = res.data.quote;
                message.innerText = `${msg}`;
            })
        })
    } catch(error) {
        console.log("Problema interno!");
    }   
}

api();