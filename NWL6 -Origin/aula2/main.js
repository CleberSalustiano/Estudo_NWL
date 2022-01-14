/* abre e fecha o menu quando clica no icone menu e x*/
const nav = document.querySelector('#header nav')
const toggles = document.querySelectorAll('nav .toggle')

for (const element of toggles) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconde o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
