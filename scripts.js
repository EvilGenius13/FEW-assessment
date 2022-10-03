// Initial variables and base settings

// Width
const widthInput = document.getElementById('width-input')
widthInput.value = 125
const widthOutput = document.getElementById('width-output')
widthOutput.innerHTML = '125px'

// Height
const heightInput = document.getElementById('height-input')
heightInput.value = 100
const heightOutput = document.getElementById('height-output')
heightOutput.innerHTML = '100px'

// Colour & Colour Box
const colorInput = document.getElementById('colour-input')
colorInput.value = '#2672ed'
const colorOutput = document.getElementById('colour-output')
colorOutput.innerHTML = '#2672ed'

const colourBox = document.getElementById('colour-box')
colourBox.style.width = `${widthInput.value}px`
colourBox.style.height = `${heightInput.value}px`
colourBox.style.backgroundColor = `${colorInput.value}`

// Event Listeners
widthInput.addEventListener('input', update)
heightInput.addEventListener('input', update)
colorInput.addEventListener('input', update)

// Update Function for values
function update(e) {
    widthOutput.innerHTML = `${widthInput.value}px`
    heightOutput.innerHTML = `${heightInput.value}px`
    colorOutput.innerHTML = `${colorInput.value}`

    colourBox.style.width = `${widthInput.value}px`
    colourBox.style.height = `${heightInput.value}px`
    colourBox.style.backgroundColor = `${colorInput.value}`
}