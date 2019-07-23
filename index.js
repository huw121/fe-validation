
function handleNameValidation(event) {
  if (/[^a-zA-Z\s'-]/g.test(event.target.value) || event.target.value.length === 0) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
    event.target.parentElement.children[1].classList.remove('hide');
  } else {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
    event.target.parentElement.children[1].classList.add('hide');
  }
}

function handleUsernameValidation(event) {
  
}

const nameNodeList = document.querySelectorAll('.name');
nameNodeList.forEach(name => {
  name.addEventListener('keyup', handleNameValidation)
})

const username = document.getElementById('username');
username.addEventListener('change', handleUsernameValidation)