var eng = [
	"How many squares per side to make the new grid?",
	"Enter a number between 1 and 64.",
	"Clear",
	"Grid Size"];

var srb = [
	"Унеси број квадрата по страници за нову мрежу.",
	"Унеси број између 1 и 64.",
	"Избриши",
	"Величина мреже"];

var currentLanguage = eng;

function srpski() {
	currentLanguage = srb;
	changeLanguage();
}

function english() {
	currentLanguage = eng;
	changeLanguage();
}

function changeLanguage() {
	$(".clear").text(currentLanguage[2]);
	$(".size").text(currentLanguage[3]);
}

function draw(){
	var x = 0;
	$(".pixel").mouseenter(function(){
		x = Number($(this).css("opacity"));
		$(this).css("opacity", 1);
	});
	$(".pixel").mouseleave(function(){
		if(x < 1){
			x = x + 0.2;

		}
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
	$(".gridSize").text(sideSize + "x" + sideSize);
}

function clearScreen(){
	$(".pixel").css("opacity", "0");
	// draw();	
}

function gridSize(){
	var sizePrompt = prompt(currentLanguage[0], "16");
	if(sizePrompt > 0 && sizePrompt <= 64) {
		createTable(sizePrompt);
		draw();
	}
	else {
		alert(currentLanguage[1]);
		gridSize();
	}
}

$(document).ready(function(){
	createTable(16);
	changeLanguage();
	draw();
});