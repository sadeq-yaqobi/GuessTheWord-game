// keyBoard
let textArea = document.querySelector(".text-area");

// Function to append text to the text area
function typeText(txt) {
  textArea.value += txt;
}

// Function to delete the last character from the text area
function deleteText() {
  textArea.value = textArea.value.slice(0, -1);
}
// end keyBoard

// preloader
window.addEventListener("load", preloader);

// Function to hide the preloader when the window is loaded
function preloader() {
  let preloaderBox = document.querySelector(".preloader");
  preloaderBox.classList.add("hide-preloader");
}
// end preloader

// burger menu
const burgerMenu = document.getElementById("burger-menu");
const overlay = document.getElementById("menu");

// Toggle the burger menu and overlay when the burger menu is clicked
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
// end burger menu

const message = document.querySelector(".message");
const guessInput = document.querySelector(".text-area");
const button = document.querySelector(".start-btn");
const keyboard = document.querySelector(".keyboard");
const letter = document.querySelector(".letter-box");
const title = document.querySelector(".title");
const letter1 = document.querySelector(".letter1");
const letter2 = document.querySelector(".letter2");
const letter3 = document.querySelector(".letter3");
const letter4 = document.querySelector(".letter4");

const myArray = [
  // An array of words
  "لیمو",
  "پنیر",
  "سفید",
  "مداد",
  "نبات",
  "برنج",
  "برنج",
  "ترمز",
  "کلمه",
  "پاکت",
  "نقره",
  "کاوه",
  "ماست",
  "پوست",
  "گردو",
  "شانه",
  "نفیس",
  "دامن",
  "دنیا",
  "گلاب",
  "نسیم",
  "گراز",
  "شکوه",
  "کاهو",
  "بهار",
  "کارت",
  "لیتر",
  "تهران",
  "سراب",
  "برزخ",
  "ربات",
  "لواش",
  "ژیان",
  "نروژ",
  "ویژه",
  "ژاکت",
  "روده",
  "سایه",
  "راست",
  "معدل",
  "زنده",
  "نیزه",
  "میهن",
  "هزیم",
  "توشه",
  "الگو",
  "شروع",
  "سرنگ",
  "راسو",
  "نرگس",
  "واگن",
  "تنور",
  "نهال",
  "بیمه",
  "سکوت",
  "موکت",
  "حکمت",
  "کویت",
  "قیام",
  "لوله",
  "متحد",
  "ولرم",
  "گریم",
  "هویج",
  "گریه",
  "جیوه",
  "سنگر",
  "تنفس",
  "گیاه",
  "لیلا",
  "هلال",
  "بینا",
  "نگار",
  "شاعر",
  "نقش",
  "بیشه",
  "پلاک",
  "سمور",
  "ماهی",
  "مشکل",
  "تلفن",
  "کلفت",
  "شانس",
  "کینه",
  "پوشک",
  "کویت",
  "چاله",
  "قلاب",
  "شکار",
  "تاجر",
  "محبت",
  "رهبر",
  "کوبا",
  "دکتر",
  "سرعت",
  "وسعت",
  "سالن",
  "خزان",
  "پنیر",
  "بابک",
  "گمرک",
  "ولرم",
  "مدال",
  "امید",
  "حدیث",
  "شاغل",
  "الاغ",
  "لنگر",
  "چنار",
  "گران",
  "گیره",
  "گاری",
  "سیاه",
  "رسوب",
  "بورس",
  "مشهد",
  "موشک",
  "ماشه",
  "سهام",
  "شریف",
  "هادی",
  "گناه",
  "سلاح",
  "تمام",
  "زرنگ",
];

let scramble = "";
let scrambled = "";
let score = 0;
let inPlay = false;

button.addEventListener("click", function () {
  if (!inPlay) {
    // Start the game
    inPlay = true;
    score = 0;
    message.innerHTML = "";
    guessInput.value = "";
    button.innerHTML = "حدس بزن";
    guessInput.classList.toggle("d-none");
    keyboard.classList.toggle("d-none");
    letter.classList.toggle("d-none");
    title.classList.toggle("d-none");

    // Create a new word for the game
    scramble = createWord();
    scrambled = randomArray(scramble.split(""));
  } else {
    // User has made a guess
    let tempGuess = guessInput.value;
    score++;

    if (guessInput.value === scramble) {
      // User guessed correctly
      inPlay = false;
      message.innerHTML =
        "تبریک !  با " +
        "<b>" +
        score +
        "</b>" +
        " حدس، " +
        "<b>" +
        scramble +
        "</b>" +
        " رو پیدا کردی";

      button.innerHTML = "شروع";
      guessInput.classList.toggle("d-none");
      keyboard.classList.toggle("d-none");
      letter.classList.toggle("d-none");
      title.classList.toggle("d-none");
    } else {
      // User guessed incorrectly
      message.innerHTML = "دوباره تلاش کن! " + "<i class='	far fa-frown'></i> ";
      guessInput.value = "";
    }
  }
});

// Function to create a random word from the myArray
function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  let rand = randomArray(tempWord.split(""));

  return tempWord;
}

// Function to randomly rearrange the letters of a word

function randomArray(arr) {
  for (i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
    letter1.innerHTML = arr[0];
    letter2.innerHTML = arr[1];
    letter3.innerHTML = arr[2];
    letter4.innerHTML = arr[3];
  }
  return arr;
}
