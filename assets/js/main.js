document.querySelector('.calculate').addEventListener('click', loader)
document.querySelector('.clear').addEventListener('click', clear)


function loader() {
    document.getElementById('output').style.display = 'none'
    document.querySelector('.loader').style.display = 'block'
    setTimeout(BMI, 2000)
}

function error() {
    document.getElementById('output').style.display = "block"
    document.querySelector('.loader').style.display = 'none'
    document.getElementById('output').innerHTML = "<span style='color: #ac1c09'>Error: Enter height and weight first!!!</span>"
    setTimeout(() => {
        document.getElementById('output').innerHTML = ''
    }, 4000)
}

function BMI() {
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    
    let index = (weight / (((height/100)*height)/100)).toFixed(0)
    
    if (height && weight != 0) {
        const output = document.getElementById('output')
        const state = document.getElementById('state')
        output.innerHTML = "Your BMI is " + index
        if(index < 15) {
            state.innerHTML = "<span style='color:orange'>Very Serverly Underweight</span>"
        } else if(index < 16) {
            state.innerHTML = "<span style='color:orange'>Serverly Underweight</span>"
        } else if(index < 18.5) {
            state.innerHTML = "<span style='color:orange'>Underweight</span>"
        } else if(index < 25) {
            state.innerHTML = "<span style='color:black'>Normal (Healthy Weight)</span>"
        } else if(index < 30) {
            state.innerHTML = "<span style='color:red'>Overweight</span>"
        } else if(index < 35) {
            state.innerHTML = "<span style='color:red'>Obese Class I (Moderate Obese)</span>"
        } else if(index < 40) {
            state.innerHTML = "<span style='color:red'>Obese Class II (Very Severly Obese)</span>"
        }

        document.getElementById('output').style.display = 'block'
        document.querySelector('.loader').style.display = 'none'
    } else {
        error()
    }
}

function clear() {
    document.getElementById('height').value = ""
    document.getElementById('weight').value = ""
    document.getElementById('output').innerHTML = ""
    document.getElementById('state').innerHTML = ""
}
