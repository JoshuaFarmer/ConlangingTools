function clr() {
	document.getElementById("output").value = " ";
	console.log("cleared");
}

function evolve() {
	// gets values of "start", "rules" and splits them to arrays //
	var start_ = document.getElementById("start").value;
	var rules_ = document.getElementById("rules").value;
	var rules = rules_.split('\n');
	var start = start_.split('\n');
	// initializes non changable variables //
	var j = 0;
	var l = 0;

	var debug = 1;

	while (l < start.length) {	
		var k = 0;
		var r = 0;
		var output = start[l];
		var initlist = [];
		var endlist = [];
		var initchar = "";
		var endchar = "";
		i = 0;
		if (debug == 1) {
			console.log("rules:");
			console.log(rules);
			console.log("start data:");
			console.log(start);
		}
	
		for (let g = 0; g < rules.length; g++) {	
			var i = 0;
			initchar = ""; endchar = "";
			while (!(rules[k].charAt(i) == '>')) {
			initchar = initchar + rules[k].charAt(i);
			console.log(initchar);
			i++;
		}
		i++;
		while (!(rules[k].charAt(i) == '')) {
			endchar = endchar + rules[k].charAt(i);
			console.log(endchar);
			i++;
		}
		
		
	
		
		initlist.push(initchar);
		endlist.push(endchar);
		console.log(initlist);
		console.log(endlist);
		
		k++;
		}
	
		for (let t = 0; t < rules.length; t++) {
		output = output.split(initlist[r]).join(endlist[r]);
		r++
		}	
		
		document.getElementById("output").value += output + '\n';
		l++;
	}
}