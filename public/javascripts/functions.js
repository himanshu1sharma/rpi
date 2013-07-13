$(document).change("select#flip-1",function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	$.get('/turnOn', function(){
				});)
    }
    else {
    	$.get('/turnOff', function(){
				});)
    }

	});