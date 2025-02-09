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
function greet(language) {
  const match = langDatabase.find((obj) => obj.language === language);
  return match ? match.message : "Welcome";
}
console.log(greet("baby"));
