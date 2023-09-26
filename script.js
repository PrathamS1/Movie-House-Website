data=[
    {
        username:'admin',
        password:'123'
    }
]
function collectData(){
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    display=document.getElementById('alert');
    var userData={username:'username',password:'password'};
    var isKeyPresent = data.some(function (item) {
        return item.username === userData.username;
    });
    if (data.length === 0) {
        data.push(userData);
    } else{
        if (!isKeyPresent) {
            data.push(userData);
            username.value = '';
            password.value ='';
            display.style.visibility = 'visible';
            display.innerHTML='Account Created Successfully';
        }
        else{
            alert('Username already exists');
            username.value = '';
            password.value ='';
        }
    }
}

function loging(){
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    var userData={username:'username',password:'password'};
    var isPairPresent = data.some(function (obj) {
        return (
          obj.username === userData.username &&
          obj.password === userData.password
        );
    });
    if (isPairPresent) {
        window.location.href = "homepage.html";
      } else{
        console.log("Login Credential is incorrect");
      }
}

function toggleSignup(){
    card=document.getElementById('sign-up-card');
    card2=document.getElementById('login-card');
    card2.style.display='none';
    card.style.display='block';
}
function toggleLogin(){
    card=document.getElementById('sign-up-card');
    card2=document.getElementById('login-card');
    card.style.display='none';
    card2.style.display='block';
}