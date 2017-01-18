function draw(){
	var x = 0;
	$(".pixel").mouseenter(function(){
		x = Number($(this).css("opacity"));
		$(this).css("opacity", 1);
	});
	$(".pixel").mouseleave(function(){
		if(x < 1)
			x = x + 0.1;
		$(this).css("opacity", x);
	});
}

function createTable(sideSize){

	var numOfRows = sideSize;
	var numOfColumns = sideSize;	
		
	$(".rows").remove();

	for (var i = 1; i <= numOfRows; i++) {
		$(".sketch-pixels").append('<tr class="rows row' + i + '"></tr>');
		for (var j = 1; j <= numOfColumns; j++){
				$(".row" + i).append('<td class="columns column' + j + '"><div class="pixel"></div></tr>');
			}
		}
	
	$(".pixel").css("opacity", "0");
	$(".pixel").css("background-color", "black");
}

function clearScreen(){
	$(".pixel").css("opacity", "0");
	draw();	
}

function gridSize(){
	var sizePrompt = prompt("How many squares per side to make the new grid?", "16");
	createTable(sizePrompt);
	draw();
}

$(document).ready(function(){
	createTable(16);
	draw();
});