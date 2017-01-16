$(document).ready(function(){
	var numOfRows = 4;
	var numOfColumns = 4;

	for (var i = 1; i <= numOfRows; i++) {
		$(".sketch-pixels").append('<tr class="row' + i + '"></tr>');
		for (var j = 1; j <= numOfColumns; j++){
				$(".row" + i).append('<td class="column' + j + '"></tr>');
			}
		}
});