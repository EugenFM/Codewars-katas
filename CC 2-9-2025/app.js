// AddEventListener to generate language


const button = document.querySelector("button");
button.addEventListener("click", greet);

function greet() {
  const inputLanguage = document.querySelector("input").value.toLowerCase();

  const langDatabase = [
    { language: "english", message: "Welcome" },
    { language: "czech", message: "Vitejte" },
    { language: "danish", message: "Welkomst" },
    { language: "dutch", message: "Welkom" },
    { language: "estonian", message: "Tere tulemast" },
    { language: "finnish", message: "Tervetuloa" },
    { language: "french", message: "Bienvenue" },
    { language: "german", message: "Wilkommen" },
    { language: "irish", message: "Failte" },
    { language: "italian", message: "Benvenuto" },
    { language: "latvian", message: "Gaidits" },
    { language: "lithuanian", message: "Laukiamas" },
    { language: "romanian", message: "Bine ati venit!" },
    { language: "polish", message: "Witamy" },
    { language: "spanish", message: "Bienvenido" },
    { language: "swedish", message: "Valkommen" },
    { language: "welsh", message: "Croeso" },
    { language: "baby", message: "Gugu!" },
  ];

  const responseLang = document.querySelector("#response");
  const match = langDatabase.find((obj) => obj.language === inputLanguage);

  console.log(match);
  responseLang.textContent = match
    ? `${match.message}`
    : "Language not found. Try again!";
  responseLang.style.color = "rgb(12, 150, 236)";
  document.querySelector("input").value = "";
  setTimeout(() => {
    document.querySelector("#response").textContent = "";
  }, 7000);
}
