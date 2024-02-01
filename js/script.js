function nekaFunkcija(nekiString){
  return  alert("Raspored projekcija filma "+nekiString+ " ce biti uskoro dostupan!");
}

const otvarac = document.querySelector("#otvarac")
const meni = document.querySelector("#menuId")

otvarac.addEventListener("click", function () {
  if (meni.className.includes("aktivan")) {
    meni.classList.remove("aktivan")
    document.body.style.overflow = 'auto';
  } else {
    meni.classList.add("aktivan")
    document.body.style.overflow = 'hidden';
  }
})

var menu = false

function checkScroll() {
  if (window.scrollY > 200) {
    document.querySelector(".navbar").classList.add("active")
  } else if (window.scrollY == 0) {
    document.querySelector(".navbar").classList.remove("active")
  }
}

window.onscroll = function () {
  checkScroll()
}
