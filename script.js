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
function deal(){
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
			 
			document.getElementById('table').innerHTML = "<div id='card'> <div id='id' style='color:" + color +"'>" + value + "</div> <img src=" + suit + " id='icon'></div> <div id='id2' style='color:" + color +"'>" + value + "</div></div>";
			check = false;
			dealt.push(card);
			console.log(dealt); 
		}
		else if (dealt.length == 52) {
			check=false;
		}
	}
}

function shuffle(){
	dealt = [];
}