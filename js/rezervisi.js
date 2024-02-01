const poljeIme = document.querySelector("#ime")
const poljeMail = document.querySelector("#email")
const poljeDatum = document.querySelector("#datum")
const poljeFilm = document.querySelector("#film")

const errorNodes = document.querySelectorAll(".error-node")

const prikazModala = $("#reservation-modal")
prikazModala.hide()
const modalDugme = document.querySelector("#modal-dugme")

poljeDatum.min = new Date().toISOString().split("T")[0]

function validateForm() {
  let greska = false

  if (poljeIme.value.length === 0) {
    poljeIme.classList.add("error-border")
    greska = true
  }

  if (!emailValid(poljeMail.value)) {
    errorNodes[0].innerText = "Email nije ispravan. Pokušajte ponovo."
    poljeMail.classList.add("error-border")
    greska = true
  }

  if (poljeDatum.value.length === 0) {
    poljeDatum.classList.add("error-border")
    greska = true
  }

  if (!greska) {
    prikazModala.show()
    let ime = document.querySelector("#modal-ime")
    ime.innerText = poljeIme.value
    let email = document.querySelector("#modal-email")
    email.innerText = poljeMail.value
    let film = document.querySelector("#modal-film")
    film.innerText = poljeFilm.value
    let datum = document.querySelector("#modal-datum")
    datum.innerText = poljeDatum.value

    let poljeKarte = document.querySelector(
      'input[name="brojKarata"]:checked'
    ).value
    let karte = document.querySelector("#modal-karte")
    karte.innerText = poljeKarte

    poljeIme.value = ""
    poljeMail.value = ""
    poljeDatum.value = ""
    poljeFilm.value = ""
  }
}

function iskljuciModal() {
  prikazModala.hide()
}

function emailValid(polje) {
  let pattern = /\S+@\S+\.\S+/
  return pattern.test(polje)
}
