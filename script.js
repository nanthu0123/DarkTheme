// get the HTML button element 
var button = document.querySelector('#button')
// get inner text of the button element
var buttonText = document.querySelector('#button').innerText

// add button click event listener
button.addEventListener('click', (e) => {
    // current button text equal to stored button text
    if (button.innerText == buttonText) {
        // set the dark theme to html page
        document.getElementById('theme').href = './css/theme.css'
        // change the button text name to white mode
        button.innerText = 'White Mode'
    }
    else {
        // the next click event,  set white (default) theme to html page
        document.getElementById('theme').href = ''
        // change button text to dark mode 
        button.innerText = buttonText;
    }
})

