
var contact = document.getElementById('contact')

    contact.addEventListener('submit',function(event){
        event.preventDefault() // Prevent the form from autosubmitting
    
        var name = document.getElementById('name').value

        console.log(name)

        var email = document.getElementById('email').value

        console.log(email);

        var subject = document.getElementById('subject').value

        console.log(subject);

        var phone = document.getElementById('phone').value

        console.log(phone);

        var message = document.getElementById('message').value

        console.log(message);
        
    })