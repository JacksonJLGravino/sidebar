const logoVet = document.getElementById('logoVet')
const veterinario = document.getElementById('veterinario')
const aside = document.querySelector('aside')
let sec = ''

function abrirFechar() {
  if ('logoVet Is' == logoVet.classList.value) {
    logoVet.classList.remove('Is')
    changeIconsSpanDisplayBlock()
    changeIconWidthOpen()
    veterinario.classList.remove('Is')
    aside.style.width = '250px'
  } else {
    logoVet.classList.add('Is')
    changeIconsSpanDisplayNone()
    changeIconWidthClose()
    veterinario.classList.add('Is')
    aside.style.width = 'auto'
  }
}

function changeIconsSpanDisplayNone() {
  const elems = document.querySelectorAll('.iconsSpan')
  let length = elems.length
  for (let i = 0; i < length; i++) {
    elems[i].style.display = 'none'
  }
}

function changeIconsSpanDisplayBlock() {
  const elems = document.querySelectorAll('.iconsSpan')
  let length = elems.length
  for (let i = 0; i < length; i++) {
    elems[i].style.display = 'block'
  }
}

function changeIconWidthOpen() {
  const icon = document.querySelectorAll('.icon')
  let length = icon.length
  for (let i = 0; i < length; i++) {
    icon[i].style.width = '90%'
  }
}

function changeIconWidthClose() {
  const icon = document.querySelectorAll('.icon')
  let length = icon.length
  for (let i = 0; i < length; i++) {
    icon[i].style.width = '50px'
  }
}
