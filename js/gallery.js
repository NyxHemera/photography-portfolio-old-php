var currentNum = 0;
var jsonSource = '';
var first = true;
var pageName = '';

function initializeGallery(photoNum) {
	currentNum = photoNum;
	loadGallery();
}

function loadGallery() {
	$.getJSON(jsonSource, updateImg);
}

function setJsonSource(jsonName) {
	jsonSource = "/js/json/" + jsonName + "gallery.json";
	pageName = jsonName;
}

function updateImg(galleryObj) {
	var source = getImgSource(galleryObj);
	if(first){
		$('#displayedImg').attr("src", source);
		$('#gallery-wrapper').css('visibility', 'visible');
		$('#gallery-wrapper').css('opacity', '1');
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
	currentNum++;
	loadGallery();
}

function left() {
	currentNum--;
	loadGallery();
}

function reloadGrid() {
	var mainElements = "";
	mainElements += '<div id="sidebar-wrapper"></div> ';
	mainElements += '<div id="content-wrapper"> ';
	mainElements += '<div id="main-section"></div> ';
	mainElements += '</div>';
	$('#wrapper').html(mainElements);
	$( '#sidebar-wrapper' ).load("template-sidebar.php #sidebar");
	var gridName = pageName + 'grid';
	createPhotoGrid(gridName);
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#gallery-wrapper').css('opacity', '0');
        setTimeout(function(){$('#gallery-wrapper').css("visibility", "hidden");}, 500);
        first = true;
        //reloadGrid();
    }
});

$(document).keyup(function(e) {
     if (e.keyCode == 37) { // left key
        left();
    }
});

$(document).keyup(function(e) {
     if (e.keyCode == 39) { // right key
        right();
    }
});



$(document).on('pageinit', function(event){
   $('#gallery-wrapper').on("swipeleft",function(){
	  right();
	});

   $('#gallery-wrapper').on("swiperight",function(){
	console.log("swiped right");
	  left();
	});

});