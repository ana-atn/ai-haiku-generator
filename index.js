function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 60,
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let apiKey = "5dfd50a97fe35994et0fob99445b78ca";
  let context =
    "You are a haiku writer. Provide the haiku in the basic HTML format. Font size should be 18px, line height 1.5, and margin top 30px. Each line of haiku should be written in a separate line using <br/> and no bullet points. Each line should start with a capital letter. Include only the haiku. Don't write the title.";
  let keyWord = document.querySelector("#key-word");
  let prompt = `Write a haiku using the given word. Make sure you use the exact given word in the haiku. The given word is ${keyWord.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.innerHTML = "Generating a haiku...";

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
