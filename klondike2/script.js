cardSpaceId = 0;

var cardSpace = function() {
	this.gen = function(){
		this.id = cardSpaceId;
		cardSpaceId++;
		document.getElementById("wrapper").insertAdjacentHTML('beforeend',"<div class='cardSpace' id='" + this.id + "'></div>");
		document.getElementById(this.id).addEventListener('drop',drop_handler);
		document.getElementById(this.id).addEventListener('dragover',drag_handler);
	}
}

var space = new cardSpace();
for (var i = 0; i < 66; i++) {
	space.gen();
}

function drop_handler(event){};
function drag_handler(event){};