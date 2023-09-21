const kanyeUrl = "https://api.kanye.rest/";
const edenUrl = "https://api.edenai.run/v2/translation/automatic_translation";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzQ0NzQ3NjMtYjllNi00OWEzLTg4NzctNzdlNjc0ZDZiNTlhIiwidHlwZSI6ImFwaV90b2tlbiJ9.k-soUP4OjaMkvmP_EUybg0kBiAuas0i6MSjAq37iFM8";
const messageButton = document.getElementById("msg-btn");
const message = document.getElementById("mensagem");

async function api() {
    try {
      const result = await axios.get(kanyeUrl);
      const quote = (result.data.quote);
      const options = {
        method: "POST",
        url: edenUrl,
        headers: {
          authorization: `Bearer ${key}`,
        },
        data: {
          providers: "amazon, google, ibm, microsoft",
          text: quote,
          source_language: "en",
          target_language: "pt-br",
        },
      };

      const response = await axios.request(options);
          message.innerHTML = response.data.ibm.text;
        return result
      
    } catch(error) {
        console.log("Problema interno!");
    }   
}
      messageButton.addEventListener('click', () => {
        api();
      })

