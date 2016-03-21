function createPhotoGrid(collectionName) {
	var jsonName = "/js/json/" + collectionName + ".json";
	$.getJSON(jsonName, useGalleryObject);
}

function useGalleryObject(galleryObject) {
	var numCells = Object.keys(galleryObject.photos).length;
	//var numRows = getNumRows(numCells);
	
	createRows(numCells, galleryObject);
}

function createRows(numCells, galleryObject){
	var cellString = '';
	var divEnd = '</div>';
	var cellStartOne = '<div class="photocell" ';
	var cellStartTwo = 'id="cell-';
	var cellEnd = '">';
	var imgString = '';

	for(i=0; i<numCells; i++){
		imgString = createImgString(i, galleryObject);
		clickString = createClickString(i);

		cellString += cellStartOne;
		cellString += clickString;
		cellString += cellStartTwo;
		cellString += '' + i;
		cellString += cellEnd;
		cellString += imgString;
		cellString += divEnd;
	}
	cellString += '<br class="clear" />';
	$('#main-section').html(cellString);
	//$('#main-section').css('padding', '50px');
}

function createClickString(count) {
	var clickStart = 'onclick="initializeGallery(';
	var clickEnd = ')" ';

	return clickStart + count + clickEnd;
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