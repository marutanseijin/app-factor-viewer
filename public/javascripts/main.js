

var socket = io.connect();
$('button').on('click', function() {
  socket.emit('request');
});
socket.on('response', function() {
  alert('Get Response!!');
});

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  
