$(window).load(function() {
/*  $.post('/read/',{pin:7}, function(value){
    alert(value);
    }); */
});


$(document).ready(function() {

$('#buttonPattern').on('click',function() {
    
      $.post('/blinkpattern/',{pin1:7,pin2:11,pin3:8,pin4:12}, function(){
            
            alert('Happy Diwali ;)');
            $("#flip-1").val("off").slider("refresh");
            $("#flip-2").val("off").slider("refresh");
            $("#flip-3").val("off").slider("refresh");
            $("#flip-4").val("off").slider("refresh");

        });
    });

$('select#flip-1').change(function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	$.post('/turnOn/',{pin:7}, function(){
				});
    }
    else {
    	$.post('/turnOff/',{pin:7}, function(){
				});
    }

	});

$('select#flip-2').change(function() {
    value = $("#flip-2").val();
    if(value== "on"){
    	$.post('/turnOn/',{pin:11}, function(){
				});
    }
    else {
    	$.post('/turnOff/',{pin:11}, function(){
				});
    }

	});

$('select#flip-3').change(function() {
    value = $("#flip-3").val();
    if(value== "on"){
    	$.post('/turnOn/',{pin:8}, function(){
				});
    }
    else {
    	$.post('/turnOff/',{pin:8}, function(){
				});
    }

	});

$('select#flip-4').change(function() {
    value = $("#flip-4").val();
    if(value== "on"){
    	$.post('/turnOn/',{pin:12}, function(){
				});
    }
    else {
    	$.post('/turnOff/',{pin:12}, function(){
				});
    }

	});
});