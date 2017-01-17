function draw(){
	$(".pixel").mouseenter(function(){
		$(this).addClass("gray");
	});
}

function createTable(size){

	var numOfRows = size;
	var numOfColumns = size;

	for (var i = 1; i <= numOfRows; i++) {
		$(".sketch-pixels").append('<tr class="row' + i + '"></tr>');
		for (var j = 1; j <= numOfColumns; j++){
				$(".row" + i).append('<td class="column' + j + '"><div class="pixel"></div></tr>');
			}
		}
}

$(document).ready(function(){
	createTable(32);
	draw();
});