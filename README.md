# Morse Code Translator

<img src="https://img.shields.io/github/commit-activity/m/kais-au/morse-coder?color=B3C6A1&label=Commits&style=for-the-badge" />

<br>

<img src="assets\img\morse coder.png" width= "50%" height= "50%" />

<br>

## MVP
- [x] Create a user interface that allows the user to either input some English text or some Morse Code
- [x] Create JS functions that would allow the user to:
  - [x] Translate their English text into Morse Code
  - [x] Morse Code into English text
- [x] Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
- [x] Make sure to keep your pure functions separated from the JS DOM interaction code.

## Tasks
1. [x] Add const object for the translation codex (an object that holds all letters as properties with their morse code values assigned to them)
2. [x] Add a function that acccepts a string and returns the morse code equivalent
    - [x] Split string into array
    - [x] Reduce the array but have it run the morse conversion returning the value into the accumulator
3. [x] Create HTML file
    - [x] Make a title
    - [x] Add instructional text
    - [x] Add text input field
    - [x] Add submit button
    - [x] Add result area to display the output or errors
    - [x] Link JavaScript to HTML
4. [x] Add DOM references
    - [x] Save each element needed to a const variable (i.e. Sumbit button, input text field, output text field)
    - [x] Add listener to button so that it will start the conversion function
    - [x] Display output of conversion to the output text area, or display an error if needed
5. [x] Create SCSS and CSS files
    - [x] Make it look pretty

## To Do
- [ ] Tidy up styling further
- [ ] Add media queries for responsivity
- [ ] Separate eng-morse data and morse-eng data from main js