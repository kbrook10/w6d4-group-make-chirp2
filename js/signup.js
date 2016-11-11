//Step 1: Create global variables
var username = document.querySelector('#usernameSignup')
var email = document.querySelector('#emailSignup')
var password = document.querySelector('#passwordSignup')
var photo = document.querySelector('#photoSignup')
var api_token = sessionStorage.getItem('api_token');
var signup_path = 'https://arcane-reaches-97615.herokuapp.com/signup';
var uploadSignup = document.querySelector('#uploadSignup')

//Step 2: Create an event listener to fire of Ajax Post
uploadSignup.addEventListener('click', fireAjaxPost)

//Step 3: Create fetch to Post new User on signup
function fireAjaxPost() {
    var formData = {
        username: username.value,
        email: email.value,
        password: password.value,
        avatar_id: photo.value,
    }
    console.log(formData)
    fetch(signup_path,{
        body: JSON.stringify({
            formData
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
    window.location.href= 'index.html'
    console.log(response)
})
}
