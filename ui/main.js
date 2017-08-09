console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://arpansharon.imad.hasura-app.io/counter', true);
    request.send(null);
};

var name = document.getElementById('name').value;
var submit = document.getElementById('submit');
submit.onclick = function() {
    var names = ['name1', 'name2', 'name3'];
};