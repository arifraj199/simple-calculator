// all button value
const buttonText = document.getElementsByClassName('button-text');
for (const button of buttonText) {
    button.addEventListener('click', function() {
        const displayText = document.getElementById('display-text');
        const displayTextValue = displayText.innerText;
        displayText.innerText = displayTextValue + button.innerText;
    })
}

// display text
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
    const displayText = document.getElementById('display-text');
    displayText.innerText = '';
})

// result button