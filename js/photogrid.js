function createPhotoGrid(collectionName) {
	var jsonName = "/js/json/" + collectionName + ".json";
	$.getJSON(jsonName, useGalleryObject);
}

function useGalleryObject(galleryObject) {
	var numCells = Object.keys(galleryObject.photos).length;
	var numRows = getNumRows(numCells);
	
	createRows(numRows, numCells, galleryObject);
}

function createRows(numRows, numCells, galleryObject){
	var count=0;
	var rowString = '';
	var rowStart = '<div class="row photorow">';
	var divEnd = '</div>';
	var colStartOne = '<div class="col-md-3 photocell" id="cell-';
	var colStartTwo = '">';
	var imgString = '';

	for(i=0; i<numRows; i++){
		rowString += rowStart;
		for(j=0; j<4; j++){

			imgString = createImgString(count, galleryObject);
			
			rowString += colStartOne;
			rowString += '' + count;
			rowString += colStartTwo;
			rowString += imgString;
			rowString += divEnd;
			
			count++;
			if(count === numCells){
				j=5;
				i=numRows;
			}
		}
		rowString += divEnd;
	}

	$('#main-section').html(rowString);
}

function createImgString(count, galleryObject) {
	var imgStart = '<img class="gridImg" src="';
	var imgEnd = '">';
	return imgStart + galleryObject.photos[count].source + imgEnd;
}

function getNumRows(numCells) {
	if(numCells%4 === 0){
		return numCells/4;
	}else{
		return (numCells/4) + 1;
	}
}