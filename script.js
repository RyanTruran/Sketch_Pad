$(document).ready(function(){
	num=prompt("How Many Rows would you like? (2-16)");
	for(var i = 0; i < (num); i++) {
		var $row = $('<div class="row"></div>');
		$('#container').append($row.clone());
	}

	for(var i = 0; i < (num); i++) {
		var $box = $('<div class="box"></div>');
		$('.row').append($box.clone());
	}
	$(".row").css("height",100/num+"%");
	$(".box").css("width",100/num+"%");




	$(".box").mouseenter(function(e){
      var colorR = Math.floor((Math.random() * 256));
      var colorG = Math.floor((Math.random() * 256));
      var colorB = Math.floor((Math.random() * 256));
      $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
});
function reset(){
		$(".box").css("background-color","white");
}

