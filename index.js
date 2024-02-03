function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "An old silent pond",
    autoStart: true,
    cursor: null,
    delay: 80,
  });
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
