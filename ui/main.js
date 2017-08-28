console.log('Loaded!');

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
     
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                console.log('Logged in');
                alert('Logged in sucessfully');
            } else if (request.status === 403) {
                 alert('Incorect crediantals');
            }  else if (request.status === 500) {
                 alert('Internal eerver error');
            }
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
     console.log(password);
    request.open('POST', 'http://arpansharon.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify());
};