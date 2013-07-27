var fnRouter  = require('./piRouter.js')
var pins = new Object;
pins.seven=0;
pins.eleven =0;
pins.eight = 0;
pins.twelve = 0;

exports.socket = function (io) {
  io.sockets.on('connection', function(socket) {
	socket.emit('state', { Current: pins });
  	socket.on('turnOn', function (data) {
  		console.log(data);
  		var request = new Object();
  		request.body = data;
  			if(data.pin == 7)
  				pins.seven = 1;
  			else if(data.pin == 11)
  				pins.eleven = 1;
  			else if(data.pin == 8)
  				pins.eight = 1;
  			else if(data.pin == 12)
  				pins.twelve = 1;
    	fnRouter.turnON(request,function(results){
    		console.log(results);
    		socket.emit('state', { Current: pins });
    		socket.broadcast.emit('state', { Current: pins });
    	});
  });

  	socket.on('turnOff', function (data) {
  			if(data.pin == 7)
  				pins.seven = 0;
  			else if(data.pin == 11)
  				pins.eleven = 0;
  			else if(data.pin == 8)
  				pins.eight = 0;
  			else if(data.pin == 12)
  				pins.twelve = 0;
  		var request = new Object();
  		request.body = data;
    	fnRouter.turnON(request,function(results){
    		console.log(results);
    		socket.emit('state', { Current: pins });
    		socket.broadcast.emit('state', { Current: pins });
    	});
  });
});
}
