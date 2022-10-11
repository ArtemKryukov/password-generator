const mainEl = document.querySelector('main')

const inputEl = document.createElement('input')
inputEl.classList.add('input')
inputEl.setAttribute('placeholder', 'Generation')
inputEl.addEventListener('keypress', (e) => {
  e.preventDefault()
})
inputEl.addEventListener('focus', () => {
  navigator.clipboard.writeText(inputEl.value)
})

const copyPassword = document.createElement('button')
copyPassword.classList.add('button')
copyPassword.innerHTML = 'Copy Password'
copyPassword.addEventListener('click', (e) => {
  inputEl.select()
  inputEl.setSelectionRange(0, 1000)
  navigator.clipboard.writeText(inputEl.value)
})

const generatePassword = document.createElement('button')
generatePassword.classList.add('button')
generatePassword.innerHTML = 'Generate Password'
generatePassword.addEventListener('click', (e) => {
  let password = passwordGeneration(12)
  inputEl.value = password
})

function passwordGeneration(passwordLength) {
  let numberChars = '123456789'
  let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  let symbolChars = '!"#$%&()*+,-./:;<=>?@[]^_`{|}'
  let allChars = numberChars + upperChars + lowerChars + symbolChars

  let generatedPassword = ''

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length)
    generatedPassword += allChars[randomNumber]
  }

  return generatedPassword
}

mainEl.appendChild(inputEl)
mainEl.appendChild(copyPassword)
mainEl.appendChild(generatePassword)


