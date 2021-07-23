
var username = document.getElementById("username")
var usernameErr = document.getElementById("username-error")
username.addEventListener('input', function(e){
       console.log(e.target.value)
        var pattern = /^[\w]{6,9}$/;
        var inputValue = e.target.value;
        var validUser = pattern.test(inputValue);
            if(validUser){
              usernameErr.style.display = 'none'
            }
              else{
               usernameErr.style.display = 'block'
            }
            
    })

    var password = document.getElementById("password")
    var passwordErr = document.getElementById("password-error")
     password.addEventListener('input', function(e){
       console.log(e.target.value)
       var pattern1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*](?=.*\d)).{8,}$/;
       var passwordValue = e.target.value;
       var validPassword = pattern1.test(passwordValue);
       if(validPassword){
           passwordErr.style.display = 'none'
       }
       else{
           passwordErr.style.display = 'block'
       }
    })
     var submit = document.getElementById('submit')
    var form = document.getElementById("form")
    form.addEventListener('submit',function(e){
        console.log('form is submitted')
       
    })
  
