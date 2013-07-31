var fnRouter  = require('./piRouter.js')
var fs = require('fs');
var pins = new Object;

fs.readFile("pinstate.json", 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
 
  data = JSON.parse(data);
  pins = data;
});

function assignPin(data,state) {

  if(state == 'high'){
      if(data.pin == 7)
          pins.seven = 1;
        else if(data.pin == 11)
          pins.eleven = 1;
        else if(data.pin == 8)
          pins.eight = 1;
        else if(data.pin == 12)
          pins.twelve = 1;
    
    } else if (state == 'low') {

        if(data.pin == 7)
          pins.seven = 0;
        else if(data.pin == 11)
          pins.eleven = 0;
        else if(data.pin == 8)
          pins.eight = 0;
        else if(data.pin == 12)
          pins.twelve = 0;
      }
}

exports.socket = function (io) {
  io.sockets.on('connection', function(socket) {
	socket.emit('state', { Current: pins });
  	socket.on('turnOn', function (data) {
  		console.log(data);
  		var request = new Object();
  		request.body = data;
        assignPin(data,'high');
    	
      fnRouter.turnON(request,function(results){
    		//console.log(results);

      fs.writeFile("pinstate.json", JSON.stringify(pins), function(err) {
            if(err) {
                console.log(err);
          } else {
                console.log("The file was saved!");
          }
        }); 

    		socket.emit('state', { Current: pins });
    		socket.broadcast.emit('state', { Current: pins });
    	});
  });

  	socket.on('turnOff', function (data) {
      assignPin(data,'low');	
  		var request = new Object();
  		request.body = data;
    	fnRouter.turnOff(request,function(results){
    		//console.log(results);

        fs.writeFile("pinstate.json", JSON.stringify(pins), function(err) {
            if(err) {
                console.log(err);
          } else {
                console.log("The file was saved!");
          }
        }); 

    		socket.emit('state', { Current: pins });
    		socket.broadcast.emit('state', { Current: pins });
    	});
  });
});
}
