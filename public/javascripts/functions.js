$(document).change("select#flip-1",function() {
    value = $("#flip-1").val();
    if(value== "on"){
    	alert('Himanshu');
    }
    else {
    	$post('/blink');
    }

	});