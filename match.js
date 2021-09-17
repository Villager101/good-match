// Method that checks good match percentage:
function checkpercentage(player1, player2) {
	try {
      	if(player1.localeCompare(player1.replace(/[^a-z]/gi, '')) == -1 || player2.localeCompare(player2.replace(/[^a-z]/gi, '')) == -1){
	  		console.log("Sorry bad input, please check you input is only alphabetic characters");
		}
	}
	catch(err) {
	  console.log("Hi there, we have a slight problem > " + err);
	}
    let usedcharacters = "";
    const outputstr = [];
    let outputstrCounter = 0;
    try {
	    let player = player1.toLowerCase() + "matches" + player2.toLowerCase();
	    for (let i = 0; i < player.length; i++) {
	  		//Check if character has been used already
	  		if (usedcharacters.includes(player.charAt(i))== true){
	  		}
	  		else if(usedcharacters.includes(player.charAt(i))== false){
	            usedcharacters = usedcharacters.concat(player.charAt(i));
	  			let letter_Count = 0;
				for (let position = 0; position < player.length; position++){
				   if (player.charAt(position) == player.charAt(i)){
				    	letter_Count += 1;
				    }
				}
				//Append answer to outputstr
	           	outputstr[outputstrCounter] = letter_Count;
				outputstrCounter++;
	        }
		}
	    
	    let characterMatch = outputstr.map(String) + "";
	    characterMatch = characterMatch.replace(/,/g, "");
		const outputstrbuffer = [];
		while(characterMatch.length > 2){
			let firstLast = 0;
			let outputstrbufferCounter = 0;
			while(characterMatch.length >= 1){
	        	if (characterMatch.length == 1){
	            firstLast = parseInt(characterMatch[0]);
	            }
				else{
	            firstLast = parseInt(characterMatch[0]) + parseInt(characterMatch[characterMatch.length-1]);
	            }
				//Append answer to outputstr
				outputstrbuffer[outputstrbufferCounter] = firstLast;
				outputstrbufferCounter++;
				characterMatch = characterMatch.slice(1);//remove first item
	            characterMatch = characterMatch.slice(0,-1);//remove last item			
			}
	        characterMatch = outputstrbuffer.map(String) + "";
	        characterMatch = characterMatch.replace(/,/g, "");
	        while (outputstrbuffer.length > 0) {
	            outputstrbuffer.pop();
	        }
	    }
		if (parseInt(characterMatch) >= 80){
			return player1 + " matches " + player2 + " "  + characterMatch + "%, good match"; 
		}
		else if (parseInt(characterMatch) < 80){
			return player1 + " matches " + player2 + " "  + characterMatch + "%";
		}
 	}
 	catch(err) {
	  console.log("Hi there, we hit tiny little problem while running your input > " + err);
	}
}


//This method sorts the given input alphabetically and returns a sorted array
function alphabeticSort(arr) {
    const sortedArray = Array.from(arr);
    let swap;
    let firstChoice = "";
    let secondChoice = "";
    do {
        swap = false;
        for (let i = 1; i < sortedArray.length; ++i) {
        	firstChoice = sortedArray[i - 1].replace(/[^0-9a-z]/gi, '');
        	secondChoice = sortedArray[i].replace(/[^0-9a-z]/gi, '');
          	if (firstChoice.localeCompare(secondChoice) == -1) {
            	[sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
            	swap = true;
          	}
        }
    } 
    while (swap)
    return sortedArray;
}


//This method sorts the given input in descending order based on the % value
function percentageSort(arr) {
    const sortedArray = Array.from(arr);
    let swap;
    let firstChoice = "";
    let secondChoice = "";
    do {
        swap = false;
        for (let i = 1; i < sortedArray.length; ++i) {
        	firstChoice = sortedArray[i - 1].substring(sortedArray[i - 1].indexOf("%")-2, sortedArray[i - 1].indexOf("%")-1);
        	secondChoice = sortedArray[i].substring(sortedArray[i].indexOf("%")-2, sortedArray[i].indexOf("%")-1);
          	if (firstChoice.localeCompare(secondChoice) == -1) {
            	[sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
            	swap = true;
          	}
        }
    } 
    while (swap)
    return sortedArray;
}


//This Method reads in a csv file name with its extention in mydata.csv and stores the results in output.txt
function readcsv(csvfilename) {

	const fs = require('fs'); 
	const parse = require('csv-parse'); // install "npm intsall csv-parse" required

	const csvData = [];
	const male = [];
	const female = [];
	try{
		fs.createReadStream(csvfilename)
		    .pipe(parse({delimiter: ':'}))
		    .on('data', function(csvrow) { 
		        if (csvrow[0][csvrow[0].length-1] == "m"){
		        	csvrow[0] = csvrow[0].slice(csvrow[0].indexOf(csvrow[0].match('[a-zA-Z]')));
		        	csvrow[0] = csvrow[0].slice(0, -3);
		        	if (male.includes(csvrow[0])== false){
		        		male.push(csvrow[0]);
		  			}
		        }
		        else if (csvrow[0][csvrow[0].length-1] == "f"){
		        	csvrow[0] = csvrow[0].slice(3);
		        	csvrow[0] = csvrow[0].slice(0, -3);
		        	if (female.includes(csvrow[0])== false){
		        		female.push(csvrow[0]);
		  			} 
		        }      
		    })

		    .on('end',function() {
		      for (let i = 0; i < male.length; i++){
		        	for (let q = 0; q < female.length; q++){
		        		csvData.push(checkpercentage(male[i], female[q]));
		        		
		        	}
		        }
		        for (let a = 0; a < percentageSort(alphabeticSort(csvData)).length; a++){
		        	fs.appendFile("output.txt", percentageSort(alphabeticSort(csvData))[a] + "\n", function (err) {
						  if (err) return console.log(err);
						});
		        }
		    });
		}
		catch(err) {
	  console.log("Hi there, we have a slight problem in processing your File. Please make sure you are typint the right filename with the proper extention eg mydata.csv. Also make sure your input file exists in the same directory and the contents of the file are valid eg Kimberly, f" + err);
	}
}

checkpercentage("Jack","Jill");
readcsv("names.csv");