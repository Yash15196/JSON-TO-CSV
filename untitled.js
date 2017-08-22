    var output = [];
var output1 = [];
var output2 = [];
var output3 = [];
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
    input: fs.createReadStream('Table_1.3.csv')

});

var myWriteStream3 = fs.createWriteStream("output_4.json")
 

     rl.on('line', (line) => {
    var jsonFromLine3 = {};


    var lineSplit = line.split(',');

    jsonFromLine3.CountryName = lineSplit[0];
    //jsonFromLine2.GDP_2013_Billions = lineSplit[18].toString();
     jsonFromLine3.growth_Population_2013=lineSplit[5]-lineSplit[2];
    jsonFromLine3.growth_PurchasingPower = lineSplit[23]-lineSplit[20];
    if (jsonFromLine3.CountryName == 'World' || jsonFromLine3.CountryName == 'European Union') {

    } else {
        output3.push(jsonFromLine3);
         
     }
 });



rl.on('close', function(line) {
    shifted = output3.shift();
    console.log(output3);
    myWriteStream3.write(JSON.stringify(output3, null, 2));

});