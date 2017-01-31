var obj = {
	0: "h2",
	1: "h3",
	2: "h4",
	3: "h5",
	4: "h6",
	5: "h7",
	6: "h8",
	7: "h9",
	8: "h10",
	9: "hj",
	10: "hq",
	11: "hk",
	12: "ha",
	13: "s2",
	14: "s3",
	15: "s4",
	16: "s5",
	17: "s6",
	18: "s7",
	19: "s8",
	20: "s9",
	21: "s10",
	22: "sj",
	23: "sq",
	24: "sk",
	25: "sa",
	26: "c2",
	27: "c3",
	28: "c4",
	29: "c5",
	30: "c6",
	31: "c7",
	32: "c8",
	33: "c9",
	34: "c10",
	35: "cj",
	36: "cq",
	37: "ck",
	38: "ca",
	39: "d2",
	40: "d3",
	41: "d4",
	42: "d5",
	43: "d6",
	44: "d7",
	45: "d8",
	46: "d9",
	47: "d10",
	48: "dj",
	49: "dq",
	50: "dk",
	51: "da",
}

var dealt = [];
function deal(target){
	var check = true;
	while (check) {
		var card = (Math.floor(Math.random()*52));
		
		if (dealt.indexOf(card) == -1) {

			var value = 0;
			switch (true) {
				case card == 0 || card == 13 || card == 26 || card == 39:
					value = "2";
					break;
				case card == 1 || card == 14 || card == 27 || card == 40:
					value = "3";
					break;
				case card == 2 || card == 15 || card == 28 || card == 41:
					value = "4";
					break;
				case card == 3 || card == 16 || card == 29 || card == 42:
					value = "5";
					break;
				case card == 4 || card == 17 || card == 30 || card == 43:
					value = "6";
					break;
				case card == 5 || card == 18 || card == 31 || card == 44:
					value = "7";
					break;
				case card == 6 || card == 19 || card == 32 || card == 45:
					value = "8";
					break;
				case card == 7 || card == 20 || card == 33 || card == 46:
					value = "9";
					break;
				case card == 8 || card == 21 || card == 34 || card == 47:
					value = "10";
					break;
				case card == 9 || card == 22 || card == 35 || card == 48:
					value = "J";
					break;
				case card == 10 || card == 23 || card == 36 || card == 49:
					value = "Q";
					break;
				case card == 11 || card == 24 || card == 37 || card == 50:
					value = "K";
					break;
				case card == 12 || card == 25 || card == 38 || card == 51:
					value = "A"
					break;
			}

			/*
			var suit = 0;
			if (card < 13) {suit = "Hearts"} else
			*/

			var suit = 0;
			var color = "black"
			switch(true) {
				case card < 13:
					suit = "heart.ico";
					color = "red";
					break;
				case card >= 13 && card < 26:
					suit = "spade.png";
					break;
				case card >= 25 && card < 39:
					suit = "club.png";
					break;
				case card >= 39:
					suit = "Diamond.png";
					color = "red";
					break;
				}
			

			 var depth = document.getElementById(target).childElementCount;
			
			 if (target == 'waste') {
			 	var position = "absolute";
			 	var bottom = 0;
			 	var style = "style='display: none;'"
			 } else {
			 	var position = "relative";
			 	var bottom = 90*depth;
			 	var style = ""
			 }

			document.getElementById(target).insertAdjacentHTML ('beforeend', "<div id='" + card + "' class='card' style='position:" + position + "; bottom:" + bottom +"%;' draggable='true' ondragstart='dragstart_handler(event);'> <div class='id' style='color:" + color +"'>" + value + "</div> <img src=" + suit + " class='icon' draggable='false'> <div class='id2' style='color:" + color +"'>" + value + "</div> <div class='back' "+ style +" onclick='flip(this);'></div> </div>");
			check = false;
			dealt.push(card);
			console.log(dealt); 
			
			
			console.log(depth);
			console.log(target);
			console.log(card);
		}
		else if (dealt.length == 52) {
			check=false;
			document.getElementById("draw").style.cssText = "background-color: transparent; border-style: dashed;";
			document.getElementById("draw").innerHTML = "";
		}
	}
}


function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};


function shuffle(){
	var waste = document.getElementById("waste");
	var redeal = [];
	for (var i = waste.childNodes.length - 1; i >= 0; i--) {
		redeal.push(waste.childNodes[i].id);
	}
	console.log(redeal);
	console.log(waste);
	


	dealt= arr_diff(dealt,redeal);
	
	for (var i = dealt.length - 1; i >= 0; i--) {
		dealt[i]= parseInt(dealt[i], 10)
	}

	document.getElementById('waste').innerHTML = "";

	console.log(dealt);

	document.getElementById("draw").style.cssText = "background-color: ivory; border-style: solid;";
	document.getElementById("draw").innerHTML = "<div class='back'></div>";


}




function dragstart_handler(ev) {
	console.log("dragStart");
	console.log(ev);
	console.log(ev.target);
	console.log(ev.target.id)
	console.log(ev.target.nextSibling);
	var targets = [];
	var check = true;
	var tar = ev.target;
	var count = 0;
	while (check) {
		if (tar.nextSibling === null) {
			check = false;
		} else {
			targets.push(tar.id);
			tar = tar.nextSibling;
			count++;
		}
	}
	console.log(targets);
	console.log("count =" + count);
	// Add the target element's id to the data transfer object
	
	ev.dataTransfer.setData("text/plain", ev.target.id);
	
	
	console.log(ev.dataTransfer);
}

function dragover_handler(ev) {
	ev.preventDefault();
	// Set the dropEffect to move
	ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
	 ev.preventDefault();
	 // Get the id of the target and add the moved element to the target's DOM
	 var data = ev.dataTransfer.getData("text");


	var dropzone = ev.target;
	while (dropzone.className != "el") {
	    dropzone = dropzone.parentNode;
	}

	var depth = dropzone.childElementCount;
	document.getElementById(data).style.position="relative";
	document.getElementById(data).style.bottom=90*depth + "%";
	console.log("dropStart");
	console.log(document.getElementById(data));	
	console.log(data);
	console.log(depth);
	dropzone.appendChild(document.getElementById(data));
}

function play() {
	shuffle();

	var count = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven"}

	for (i = 1; i < 8; i++) {
		console.log(count[i]);
		var j = 1;
		while (j <= i) {
			deal(count[i]);
			if (j == i) {
				document.getElementById(count[i]).lastElementChild.lastElementChild.style.display = "none";
			}
			j++;
		}
		
	}
	
}

function flip(self) {
	console.log(self);
	self.style.display="none";
}
