$(document).ready(function(){

$(document).on('mobileinit', function () {
    $.mobile.pushStateEnabled = false;
});

});

var socket = io.connect('http://localhost');
var pinState;

function turnOn(pinNumber){
	socket.emit('turnOn', {pin : pinNumber});
};

function turnOff(pinNumber){
    socket.emit('turnOff', {pin : pinNumber});
};

socket.on('stateChange', function (data) {
	pinState = data.Current;
    setValues(data.Current);
});

function getState(callback){
	$.get('/pinState/', function(roomList){ 
        callback(roomList); 
    });
}

function saveConfig(config) {

    console.log(config);

    var obj = {};
    obj.data = {};
    obj.data.roomList = config;

    for(var i=0 ; i < config.length; i++) {
        try {
            obj.data.roomList[i].switches = config[i].switches();
        } catch(e) { obj.data.roomList[i].switches = config[i].switches;
        }
    }
   console.log(obj);

    socket.emit('saveSettings', obj);
}

function setValues(roomList){
    for(var i=0; i<roomList.data.roomList.length ;i++){
        for (var j = 0; j < roomList.data.roomList[i].switches.length; j++) {
            try {
                 $(document).find('#button'+ roomList.data.roomList[i].switches[j].pin).val(roomList.data.roomList[i].switches[j].value).slider('refresh'); 
            } catch(e) {
                console.log(e);
                $(document).find('#button'+ roomList.data.roomList[i].switches[j].pin).slider();
                $(document).find('#button'+ roomList.data.roomList[i].switches[j].pin).val(roomList.data.roomList[i].switches[j].value).slider('refresh');
            }
        }
    }
}