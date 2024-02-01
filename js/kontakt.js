const poljeImee = document.querySelector("#poljeIme")
const poljeMaill = document.querySelector("#poljeMail")
const poljePorukaa = document.querySelector("#poljePoruka")
const errorNodes = document.querySelectorAll(".error-node")

const successModal = document.querySelector("#success-modal")
const modalDugme = document.querySelector("#modal-dugme")

function validateForm() {
  let greska = false

  if (poljeImee.value.length === 0) {
    errorNodes[0].innerText = "Ne sme ostati prazno"
    poljeImee.classList.add("error-border")
    greska = true
  }

  if (!emailValid(poljeMaill.value)) {
    errorNodes[1].innerText = "Email nije ispravan. Pokušajte ponovo."
    poljeMaill.classList.add("error-border")
    greska = true
  }

  if (poljePorukaa.value.length === 0) {
    errorNodes[2].innerText = "Upisite poruku"
    message.classList.add("error-border")
    greska = true
  }

  if (!greska) {
    prikaziModal()

    poljeImee.value = ""
    poljeMaill.value = ""
    poljePorukaa.value = ""
  }
}

function iskljuciModal() {
  successModal.classList.remove("aktivan")
}
function prikaziModal() {
  successModal.classList.add("aktivan")
    let ime = document.querySelector("#modal-ime")
    ime.innerText = poljeImee.value
    let email = document.querySelector("#modal-email")
    email.innerText = poljeMaill.value
    let poruka = document.querySelector("#modal-poruka")
    poruka.innerText = poljePorukaa.value
  
}
function emailValid(poljePoruka) {
  let pattern = /\S+@\S+\.\S+/
  return pattern.test(poljePoruka)
}
