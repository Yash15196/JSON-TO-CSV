var output4 = [];
var output3 = [];
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
    input: fs.createReadStream('Table_1.3.csv')

});

var myWriteStream3 = fs.createWriteStream("output_4.json")
 var myWriteStream4 = fs.createWriteStream("output_6.json")

     rl.on('line', (line) => {
    var jsonFromLine3 = {};


    var lineSplit = line.split(',');

    jsonFromLine3.CountryName = lineSplit[0];
    //jsonFromLine2.GDP_2013_Billions = lineSplit[18].toString();
     jsonFromLine3.growth_Population_2010=lineSplit[2];
    jsonFromLine3.growth_Population_2013 = lineSplit[5];
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


     rl.on('line', (line) => {
    var jsonFromLine4 = {};


    var lineSplit = line.split(',');

    jsonFromLine4.CountryName = lineSplit[0];
    //jsonFromLine2.GDP_2013_Billions = lineSplit[18].toString();
     jsonFromLine4.growth_PurchasingPower_2010=lineSplit[20];
    jsonFromLine4.growth_PurchasingPower_2013 = lineSplit[23];
    if (jsonFromLine4.CountryName == 'World' || jsonFromLine4.CountryName == 'European Union') {

    } else {
        output4.push(jsonFromLine4);
         
     }
 });



rl.on('close', function(line) {
    shifted = output4.shift();
    console.log(output4);
    myWriteStream4.write(JSON.stringify(output4, null, 2));

});