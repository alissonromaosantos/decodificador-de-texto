const textInput = document.querySelector("#input-text");
const encryptButton = document.querySelector(".encrypt-button");
const warningMessage = document.querySelector(".warning-message");
const imageShowMessage = document.querySelector(".show-message img");
const titleShowMessage = document.querySelector(".show-message h3");
const paragraphShowMessage = document.querySelector(".show-message p");
const textareaShowMessage = document.querySelector("#output-text");
const copyButton = document.querySelector(".copy-button");

let words;
let letters;
let encryptedWords = [];

encryptButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  let newWord = "";
  textareaShowMessage.value = "";

  let withOneVowel = true;
  let withTwoVowels = true;
  let withThreeVowels = true;

  if (
    textInput.value === textInput.value.toLowerCase() &&
    textInput.value !== "" &&
    !textInput.value.includes("à") &&
    !textInput.value.includes("á") &&
    !textInput.value.includes("é") &&
    !textInput.value.includes("ê") &&
    !textInput.value.includes("í") &&
    !textInput.value.includes("ó") &&
    !textInput.value.includes("ô") &&
    !textInput.value.includes("ú") &&
    !textInput.value.includes("ç") &&
    !textInput.value.includes("ã") &&
    !textInput.value.includes("õ")
  ) {
    warningMessage.style.color = "var(--gray-400)";

    imageShowMessage.style.display = "none";
    titleShowMessage.style.display = "none";
    paragraphShowMessage.style.display = "none";

    textareaShowMessage.style.display = "block";
    copyButton.style.display = "block";

    words = textInput.value.split(" ");

    for (let word of words) {
      if (
        word.includes("a") &&
        word.includes("e") &&
        word.includes("i") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("a") &&
        word.includes("i") &&
        word.includes("o") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("a") &&
        word.includes("o") &&
        word.includes("u") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("a") &&
        word.includes("u") &&
        word.includes("i") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("e") &&
        word.includes("o") &&
        word.includes("u") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("i") &&
        word.includes("o") &&
        word.includes("u") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("o") &&
        word.includes("a") &&
        word.includes("e") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("u") &&
        word.includes("a") &&
        word.includes("e") &&
        withThreeVowels
      ) {
        letters = word.split("");

        withTwoVowels = false;
        withOneVowel = false;

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("a") && word.includes("e") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("a") && word.includes("i") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("a") && word.includes("o") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("a") && word.includes("u") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("o") && word.includes("u") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("e") && word.includes("i") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("e") && word.includes("o") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("e") && word.includes("u") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("i") && word.includes("o") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (word.includes("i") && word.includes("u") && withTwoVowels) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("a") &&
        !word.includes("e") &&
        !word.includes("i") &&
        !word.includes("o") &&
        !word.includes("u") &&
        withOneVowel
      ) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "a") {
            letters.splice(i, 1, "ai");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("e") &&
        !word.includes("a") &&
        !word.includes("i") &&
        !word.includes("o") &&
        !word.includes("u") &&
        withOneVowel
      ) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "e") {
            letters.splice(i, 1, "enter");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("i") &&
        !word.includes("e") &&
        !word.includes("a") &&
        !word.includes("o") &&
        !word.includes("u") &&
        withOneVowel
      ) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "i") {
            letters.splice(i, 1, "imes");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("o") &&
        !word.includes("e") &&
        !word.includes("i") &&
        !word.includes("a") &&
        !word.includes("u") &&
        withOneVowel
      ) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "o") {
            letters.splice(i, 1, "ober");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }

      if (
        word.includes("u") &&
        !word.includes("e") &&
        !word.includes("i") &&
        !word.includes("a") &&
        !word.includes("o") &&
        withOneVowel
      ) {
        letters = word.split("");

        for (let i = 0; i < letters.length; i++) {
          if (letters[i] === "u") {
            letters.splice(i, 1, "ufat");
            newWord += letters[i];
          } else {
            newWord += letters[i];
          }
        }

        newWord += " ";
        encryptedWords.push(newWord);
      }
    }

    textareaShowMessage.value = encryptedWords[encryptedWords.length - 1];
  } else {
    warningMessage.style.color = "#f30000";
  }
});
