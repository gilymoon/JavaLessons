const baseUrl = "https://5e97372677f54300163394d5.mockapi.io/api/v1/users";

const subButton = document.querySelector(".submit-button");
const loginForm = document.querySelector(".login-form");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const errorText = document.querySelector(".error-text");
const inp = document.querySelectorAll('input');

const getUser = () => {
  const userEmail = emailInput.value;
  const userName = nameInput.value;
  const userPassword = passwordInput.value;

  return {
    name: `${userName}`,
    email: `${userEmail}`,
    password: `${userPassword}`,
  };
};

function sendUserToServer(user){
    user = getUser();
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
        .then(data => {
            inp.forEach(elem => elem.value = '');
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });
}

function checkValidity(){
  if(loginForm.reportValidity()){
    subButton.disabled = false;
  }
  else{
    subButton.disabled = true;
  }
 
}

subButton.addEventListener('click', sendUserToServer);
loginForm.addEventListener('input', checkValidity);