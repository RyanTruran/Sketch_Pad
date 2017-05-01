$(document).ready(function(){
	set();
});
function reset(){
		$(".box").css("background-color","white");
}
function set(){
		num=prompt("How Many Rows would you like? (2-16)");
	if (num>16){
		num=16;
	}
	else if(num<2){
		num=2;
	}
	for(var i = 0; i < (num); i++) {
		$('#container').append('<div class="row"></div>');
	}
	for(var i = 0; i < (num); i++) {
		$('.row').append('<div class="box"></div>');
	}

	$(".row").css("height",100/num+"%");
	$(".box").css("width",100/num+"%");

	$(".box").mouseenter(function(e){
      var colorR = Math.floor((Math.random() * 256));
      var colorG = Math.floor((Math.random() * 256));
      var colorB = Math.floor((Math.random() * 256));
      $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
}
function rebuild(){
	$(".row").detach();
	reset();
	set();
}
