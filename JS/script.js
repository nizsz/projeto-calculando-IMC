import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { notANumber, calculatorIMC } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// eventos
form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value


  const weightOrHeightIsNotANumber = notANumber (weight) || notANumber (height)
  if (weightOrHeightIsNotANumber) {
    alertError.open()
    return;
  }
  
  
  alertError.close()

  const result = calculatorIMC(weight,height)
  
  displayResultMessage(result)
}

function displayResultMessage (result) {
  const messageModal = `Seu IMC é de ${result}`

  Modal.message.innerText = messageModal
  Modal.open()

}

form.addEventListener('input', resetingAlertErrorWhemRewritingInput)

function resetingAlertErrorWhemRewritingInput () {
  inputHeight.value
  inputWeight.value
  alertError.close()
}




