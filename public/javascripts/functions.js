$(document).change("select#flip-1",function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	$.get('/turnOn/?pin=7', function(){
				});
    }
    else {
    	$.get('/turnOff/?pin=7', function(){
				});
    }

	});

$(document).change("select#flip-2",function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	$.get('/turnOn/?pin=11', function(){
				});
    }
    else {
    	$.get('/turnOff/?pin=11', function(){
				});
    }

	});

$(document).change("select#flip-3",function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	$.get('/turnOn/?pin=8', function(){
				});
    }
    else {
    	$.get('/turnOff/?pin=8', function(){
				});
    }

	});

$(document).change("select#flip-4",function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	$.get('/turnOn/?pin=12', function(){
				});
    }
    else {
    	$.get('/turnOff/?pin=12', function(){
				});
    }

	});