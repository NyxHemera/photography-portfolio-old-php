var currentNum = 0;
var jsonSource = '';

function initializeGallery(photoNum) {
	currentNum = photoNum;
	$( '#wrapper' ).load("template-gallery.html #gallery-wrapper");
	loadGallery();
}

function loadGallery() {
	$.getJSON(jsonSource, updateImg);
}

function setJsonSource(jsonName) {
	jsonSource = "/js/json/" + jsonName + ".json";
}

function updateImg(galleryObj) {
	var source = getImgSource(galleryObj);
	
	$("#displayedImg").fadeTo(500,0,function(){
		$("#displayedImg").attr("src", source);
	});
		$("#displayedImg").fadeTo(500,1,function(){});
		
}

function getImgSource(galleryObj) {
	var numCells = Object.keys(galleryObj.photos).length;
	if(currentNum >= numCells){
		currentNum = currentNum-numCells;
	}else if(currentNum < 0){
		currentNum = currentNum + numCells;
	}

	return galleryObj.photos[currentNum].source;
}

function right() {
	fadeControls();
	currentNum++;
	loadGallery();
}

function left() {
	fadeControls();
	currentNum--;
	loadGallery();
}

function fadeControls() {
	$("#buttonFrame").fadeTo(500, 0, function(){});	
}

/*
$("#right").on( "click", function() {
	currentNum++;
	loadGallery();
});
$("#left").on( "click", function() {
	currentNum--;
	loadGallery();
});
$("#buttonFrame").on( "click", function() {
	//fade controls		
	$("#buttonFrame").fadeTo(500, 0, function(){});		
});
*/