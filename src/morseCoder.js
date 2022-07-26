//# English to Morse Code Library

const toMorLib = {
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	V: ".--",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",
	0: "-----",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----.",
	".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"'": ".----.",
	"!": "-.-.--",
	"/": "-..-.",
	"(": "-.--.",
	")": "-.--.-",
	"&": ".-...",
	":": "---...",
	";": "-.-.-.",
	"=": "-...-",
	"+": ".-.-.",
	"-": "-....-",
	_: "..--.-",
	'"': ".-..-.",
	$: "...-..-",
	"@": ".--.-.",
};

//# Morse Code to English Library

const toEngLib = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	".-.-.-": ".",
	"--..--": ",",
	"..--..": "?",
	".----.": "'",
	"-.-.--": "!",
	"-..-.": "/",
	"-.--.": "(",
	"-.--.-": ")",
	".-...": "&",
	"---...": ":",
	"-.-.-.": ";",
	"-...-": "=",
	".-.-.": "+",
	"-....-": "-",
	"..--.-": "_",
	".-..-.": '"',
	"...-..-": "$",
	".--.-.": "@",
};

function convert(input) {
	if (/[a-z]/gi.test(input)) {
		const engToMor = input
			.toUpperCase()
			.split(" ")
			.map((arr2) => {
				return arr2
					.split("")
					.map((char) => {
						return toMorLib[char] ? toMorLib[char] : char;
					})
					.join(" ");
			})
			.join(" / ");
		return engToMor;
	} else {
		const morToEng = input
			.split(" / ")
			.map((arr2) => {
				return arr2
					.split(" ")
					.map((char) => {
						return toEngLib[char] ? toEngLib[char] : char;
					})
					.join("");
			})
			.join(" ");
		return morToEng;
	}
}

const displayInput = document.getElementById("displayInput");
const displayOutput = document.getElementById("displayOutput");
const textInput = document.getElementById("textInput");
const convertButton = document.getElementById("convertBtn");

convertButton.addEventListener("click", () => {
	const inputValue = textInput.value;
	displayInput.innerText = inputValue;
	displayOutput.innerText = convert(inputValue);
	textInput.value = "";
});
