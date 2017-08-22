var output = [];
flag=[0,0,0,0,0,0];
count=[0,0,0,0,0,0];
readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
input: fs.createReadStream('Table_1.3.csv')});
var myWriteStream = fs.createWriteStream("output_5.json");
rl.on('line', (line) => {var jsonFromLine = {};
var jsonFromLine1 = {};
 var lineSplit = line.split(',');
 jsonFromLine1.CountryName = lineSplit[0];
  if (jsonFromLine1.CountryName == 'World' || jsonFromLine1.CountryName == 'European Union') {} 
        else if(jsonFromLine1.CountryName=='Australia') {count[0]=count[0]+lineSplit[5];
        jsonFromLine.Continent="Australia"
        jsonFromLine.Population_2013=count;}
else if(jsonFromLine1.CountryName=='Argentina' || jsonFromLine1.CountryName=='Brazil') {count[1]=count[1]-(-lineSplit[5]);
        flag[1]++;
        if(flag[1]==2){jsonFromLine.Continent="South America";
        	 jsonFromLine.Population_2013=count[1];
}}else if(jsonFromLine1.CountryName=='United Kingdom' || jsonFromLine1.CountryName=='France' || jsonFromLine1.CountryName=='Russia'||jsonFromLine1.CountryName=='Turkey' ) {count[2]=count[2]-(-lineSplit[5]);
        flag[2]++;
        if(flag[2]==4){jsonFromLine.Continent="European";
        	 jsonFromLine.Population_2013=count[2];
}}else if(jsonFromLine1.CountryName=='China' || jsonFromLine1.CountryName=='India' || jsonFromLine1.CountryName=='Indonesia'||jsonFromLine1.CountryName=='Japan'||jsonFromLine1.CountryName=='Saudi Arabia'||jsonFromLine1.CountryName=='Republic of Korea' ) {
        count[3]=count[3]-(-lineSplit[5]);
        flag[3]++;
        if(flag[3]==6){jsonFromLine.Continent="Asia";
        	 jsonFromLine.Population_2013=count[3];}}else if(jsonFromLine1.CountryName=='Mexico' || jsonFromLine1.CountryName=='USA'  ) {flag[4]++;
        count[4]=count[4]-(-lineSplit[5]);
        if(flag[4]==2){jsonFromLine.Continent="North America";
        	   jsonFromLine.Population_2013=count[4];}}
else if(jsonFromLine1.CountryName=='South Africa' ) {jsonFromLine.Continent="Africa"
        jsonFromLine.Population_2013=lineSplit[5];}
output.push(jsonFromLine);
output.sort(function(a, b) {
            return b.Population_2013  - a.Population_2013;});
});rl.on('close',(line)=> {var shifted= output.slice(10,21);
    shift1=shifted.splice(1,4)
    shifted.splice(5,1);
    shifted.splice(1,1);
    console.log(shifted);
    myWriteStream.write(JSON.stringify(shifted, null, 2));});
