//Step 1 - Create variables for the login, email, password fields
var login = document.querySelector('#login'); //May need to remove and just use Upload
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var api_token = sessionStorage.getItem('api_token');
var api_path = 'https://arcane-reaches-97615.herokuapp.com/api_token';

//Step 3 - Create function to handle signin event
login.addEventListener('click', ()=> {
  console.log('Press Enter to login')
  // var formData = {
  //   username: email.value,
  //   password: password.value,
  // };
  // console.log(formData)
  fetch('https://arcane-reaches-97615.herokuapp.com/login', {
    body: JSON.stringify({
      username: username.value,
      password: password.value
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  .then(response => response.json())
  .then(response => {

    sessionStorage.setItem('api_token', response.user.api_token)
    sessionStorage.setItem('user', JSON.stringify(response.user))
    window.location.href= './mainchirp.html'
  });
});
