var currentNum = 0;
var jsonSource = '';
var first = true;
var pageName = '';

function initializeGallery(photoNum) {
	currentNum = photoNum;
	$( '#wrapper' ).load("template-gallery.html #gallery-wrapper", function(){
		loadGallery();
	});
}

function loadGallery() {
	$.getJSON(jsonSource, updateImg);
}

function setJsonSource(jsonName) {
	jsonSource = "/js/json/" + jsonName + ".json";
	pageName = 'colombia';
}

function updateImg(galleryObj) {
	var source = getImgSource(galleryObj);
	if(first){
		$('#displayedImg').attr("src", source);
		first = false;
	}else{
		$("#displayedImg").fadeTo(500,0,function(){
		$("#displayedImg").attr("src", source);
	});
		$("#displayedImg").fadeTo(500,1,function(){});
	}
	
		
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

function reloadGrid() {
	var mainElements = "";
	mainElements += '<div id="sidebar-wrapper"></div> ';
	mainElements += '<div id="content-wrapper"> ';
	mainElements += '<div id="main-section"></div> ';
	mainElements += '</div>';
	$('#wrapper').html(mainElements);
	$( '#sidebar-wrapper' ).load("template-sidebar.html #sidebar");
	var gridName = pageName + 'grid';
	createPhotoGrid(gridName);
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#gallery-wrapper').remove();
        reloadGrid();
    }
});