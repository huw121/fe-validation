function handleNameValidation(event) {
  if (
    /[^a-zA-Z\s'-]/g.test(event.target.value) ||
    event.target.value.length === 0
  ) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    event.target.parentElement.children[1].classList.remove("hide");
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    event.target.parentElement.children[1].classList.add("hide");
  }
}

function handleUsernameValidation(event) {
  if (/^\S+$/.test(event.target.value) && /[\W]/.test(event.target.value)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    event.target.parentElement.removeChild(
      event.target.parentElement.children[1]
    );
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    if (event.target.parentElement.children.length < 2) {
      const newPTag = document.createElement("p");
      newPTag.innerText = "YOUR USERNAME IS INVALID, TRY AGAIN!!!";
      event.target.parentElement.appendChild(newPTag);
    }
  }
}

function handleDOBValidation(event) {
  const dateTime = new Date(event.target.value).getTime();
  const eighteenYrs = 568024668000;
  const ageCutoff = new Date() - eighteenYrs;
  if (dateTime > ageCutoff) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    if (event.target.parentElement.children.length < 2) {
      const newPTag = document.createElement("p");
      newPTag.innerText = "ADULTS ONLY, GET OUT";
      event.target.parentElement.appendChild(newPTag);
    }
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    event.target.parentElement.removeChild(
      event.target.parentElement.children[1]
    );
  }
}

function handleSignupSubmission(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  if ([...inputs].every(input => input.classList.contains("valid"))) {
    window.location.href = "/whack-the-moles.html";
  } else {
    const newPTag = document.createElement("p");
    newPTag.innerText = "INCORRECT FIELDS, TRY AGAIN";
    event.target.parentElement.appendChild(newPTag);
  }
}

const nameNodeList = document.querySelectorAll(".name");
nameNodeList.forEach(name => {
  name.addEventListener("keyup", handleNameValidation);
});

const username = document.getElementById("username");
username.addEventListener("change", handleUsernameValidation);

const dob = document.getElementById("dob");
dob.addEventListener("change", handleDOBValidation);

const form = document.getElementById("signup");
form.addEventListener("submit", handleSignupSubmission);
