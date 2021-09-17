// Creates an object that checks the percentage:
const checkPercentage = {
  //firstName: "John",
  //lastName: "Doe",
  //id: 5566,
  players: "JackmatchesJill",
  fullName : function() {
    //return this.firstName + " " + this.lastName;
    let usedcharacters = "";
    const outputstr = [];
    let outputstrCounter = 0;
    ///this.players = players.toLowerCase();
    for (let i = 0; i < this.players.length; i++) {
  		//text += players[i] + "<br>";
  		//Check if character has been used already
  		if (usedcharacters.includes(this.players.charAt(i))== true){

  		}
  		else if(usedcharacters.includes(this.players.charAt(i))== false)
  			//Check how many times a character is in players
  			var letter_Count = 0;
			for (var position = 0; position < this.players.length; position++){
			   if (this.players.charAt(position) == this.players.charAt(i)){
			    	letter_Count += 1;
			    }
			}
			//Append answer to outputstr
			outputstr[outputstrCounter] = letter_Count;
			outputstrCounter++;
	}
	const outputstrbuffer = [];
	while(outputstr.length < 2){
		let firstLast = 0;
		let outputstrbufferCounter = 0;
		while(outputstr.length < 1){
			firstLast = outputstr.slice(1) + outputstr.slice(-1);
			//Append answer to outputstr
			outputstrbuffer[outputstrbufferCounter] = firstLast;
			outputstrbufferCounter++;
			outputstr.shift();//remove first item
			outputstr.pop();//remove last item
		}
		outputstr = outputstrbuffer;//Update outputstr
		outputstrbuffer = [];//Clear outputstrbuffer 
	}
	if (outputstr[0] >= 80){
		document.write("Good match"); 
	}
	else if (outputstr[0] < 80){
		document.write("Bad match"); 
	}
  }
};


For length of string
     If i in usedcharacters 
         I++
    If i not in usedcharacters
        Check how many times i is in string
         Append answer to outputstr
         i++
While Outputstr length <2
  While outputstr length <1
    // Add first and last character
     //Append to outputstrbuffer
     //Delete first and last character
 //Append infront of outputstr string outputstrbuffer
 //Clear outputstrbuffer 
Convert outputstr to int
If outputstr >=80
  Append good match to string
  Return string
If outputstr <80
  Return string
Else catch exception

<!DOCTYPE html>
<html>
<body>

<h2>The JavaScript <i>this</i> Keyword</h2>
<p>In this example, <b>this</b> represents the <b>person</b> object.</p>
<p>Because the person object "owns" the fullName method.</p>

<p id="demo"></p>

<script>
// Creates an object that checks the percentage:
const checkPercentage = {
  //firstName: "John",
  //lastName: "Doe",
  //id: 5566,
  players: "JackmatchesJill",
  fullName : function() {
    //return this.firstName + " " + this.lastName;
    let usedcharacters = "";
    const outputstr = [];
    let outputstrCounter = 0;
    ///this.players = players.toLowerCase();
    for (let i = 0; i < this.players.length; i++) {
  		//text += players[i] + "<br>";
  		//Check if character has been used already
  		if (usedcharacters.includes(this.players.charAt(i))== true){
//document.write("Good match");
//document.write(this.players.charAt(i));
  		}
  		else if(usedcharacters.includes(this.players.charAt(i))== false){
  			//Check how many times a character is in players
            usedcharacters = usedcharacters.concat(this.players.charAt(i));
            //document.write(this.players.charAt(i));
  			let letter_Count = 0;
			for (let position = 0; position < this.players.length; position++){
			   if (this.players.charAt(position) == this.players.charAt(i)){
               
			    	letter_Count += 1;
                    //document.write(letter_Count);
			    }
			}
			//Append answer to outputstr
           // document.write(letter_Count);
			outputstr[outputstrCounter] = letter_Count;
			outputstrCounter++;
            //document.write(letter_Count);
            }
	}
    //document.write(numString.push(outputstr) + ";;;");
    //const bufferString = []
    //bufferString.push(outputstr);
    //let characterMatch = "";document.write(typeof bufferString[0]); 
    //characterMatch = bufferString[0];document.write(typeof characterMatch);
    let characterMatch = outputstr.map(String) + "";
    characterMatch = characterMatch.replace(/,/g, "");
	const outputstrbuffer = [];
    //document.write(characterMatch + "||");
	while(characterMatch.length > 1){
    	document.write(characterMatch + "||");
		let firstLast = 0;
		let outputstrbufferCounter = 0;
		while(characterMatch.length >= 1){
        	if (characterMatch.length == 1){
            firstLast = parseInt(characterMatch[0])
            }
            else if (parseInt(characterMatch[0]) == 0 || parseInt(characterMatch[characterMatch.length-1])) {
            	firstLast = parseInt(characterMatch[0] + characterMatch[characterMatch.length-1]);
            	firstLast
            }
			else{
            firstLast = parseInt(characterMatch[0]) + parseInt(characterMatch[characterMatch.length-1]);
            }
            //document.write(firstLast);
			//Append answer to outputstr
			outputstrbuffer[outputstrbufferCounter] = firstLast;
            //document.write(outputstrbuffer + "|");
			outputstrbufferCounter++;
			characterMatch = characterMatch.slice(1);//remove first item
            characterMatch = characterMatch.slice(0,-1);//remove last item
            document.write(characterMatch + "|+|");
			
		}//document.write(outputstrbuffer + "|");document.write(outputstr + "|");
		//outputstr = [8];
        //document.write(typeof outputstr);
        
        characterMatch = outputstrbuffer.map(String) + "";
        characterMatch = characterMatch.replace(/,/g, "");
        //document.write(characterMatch);
        //outputstr.concat(outputstrbuffer);//Update outputstr
        //document.write(outputstr);
        //document.write(outputstr.concat(outputstrbuffer) + "|");
        while (outputstrbuffer.length > 0) {
    outputstrbuffer.pop();
}//Clear outputstrbuffer 
        //document.write(typeof outputstrbuffer);
	}//document.write(outputstr);
	if (parseInt(characterMatch) >= 80){
		document.write("Good match"); 
	}
	else if (parseInt(characterMatch) < 80){
		document.write("Bad match" + parseInt(characterMatch); 
	}
  }
};
// Display data from the object:
document.getElementById("demo").innerHTML = checkPercentage.fullName();
</script>

</body>
</html>
