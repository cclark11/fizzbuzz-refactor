$("form").on("submit",function(event){

	event.preventDefault();
	
	var i = parseInt($("#number").val(),10);
	
 	if(i%15==0){
    		alert("fizzbuzz")
  	}
  	else if(i%3==0){
   		alert("fizz")
  	}
  	else if(i%5==0){
   		alert("buzz")
  	}
    else if(isNaN(i)){
      alert("Please enter a valid number")
    }
  	else{
    		alert(i);
  	}
	
});