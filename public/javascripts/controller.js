function roomsbean(name, switches) {
    var self = this;
    self.name = name;
    self.switches = switches;
}


function viewModel() {
    var self = this;

    var a =  '{ "data": {"roomList": [ { "name": "room1", "switches": [  { "pin": 1, "name": "fan" },{ "pin": 2, "name": "bulb" }] },{ "name": "room2", "switches": [  { "pin": 1, "name": "fan" },{ "pin": 2, "name": "bulb" }] }]}}';
        self.roomList =  JSON.parse(a);
    
    var roomsArray = ko.observableArray();    // Initially an empty array

    for(var i=0; i<self.roomList.data.roomList.length ;i++){
            roomsArray.push(new roomsbean(self.roomList.data.roomList[i].name, self.roomList.data.roomList[i].switches));
    }

    self.rooms = roomsArray;

    self.clicked = function(u) {
        var index = self.rooms.indexOf(u);
       self.rooms.splice(index,1);
    }

    self.cl = function(u) {
        swArray.push('{ "name": "aaa"}');
        self.sw = swArray;
    }
        var swArray = ko.observableArray();

    self.sw = swArray;
    console.log(swArray);

}

ko.applyBindings(new viewModel());