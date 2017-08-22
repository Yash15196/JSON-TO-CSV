var output = [];
var output1 = [];
var output2 = [];
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
    input: fs.createReadStream('Table_1.3.csv')

});
var myWriteStream = fs.createWriteStream("output_1.json");
var myWriteStream1 = fs.createWriteStream("output_2.json");
var myWriteStream2 = fs.createWriteStream("output_3.json");
rl.on('line', (line) => {

    // Sorting by population
    var jsonFromLine = {};

// ----------------------------------------------------------------------------------------------
    var lineSplit = line.split(',');

    jsonFromLine.CountryName = lineSplit[0];
    // jsonFromLine.GDP_2013_Billions=lineSplit[18].toString();
    jsonFromLine.Population_2013 = lineSplit[5];
    // jsonFromLine.PurchasingPower = lineSplit[23];
    if (jsonFromLine.CountryName == 'World' || jsonFromLine.CountryName == 'European Union') {

    } else {
        output.push(jsonFromLine);

        output.sort(function(a, b) {
            return b.Population_2013 - a.Population_2013;
        });


    }
});

rl.on('close', function(line) {
    shifted = output.shift();
    console.log(output);
    myWriteStream.write(JSON.stringify(output, null, 2));

});
// Sorting by population close

// ---------------------------------------------------------------------------------------------
// Sorting by PurchasingPower
rl.on('line', (line) => {
    var jsonFromLine1 = {};


    var lineSplit = line.split(',');

    jsonFromLine1.CountryName = lineSplit[0];
    // jsonFromLine.GDP_2013_Billions=lineSplit[18].toString();
    // jsonFromLine.Population_2013=lineSplit[5];
    jsonFromLine1.PurchasingPower = lineSplit[23];
    if (jsonFromLine1.CountryName == 'World' || jsonFromLine1.CountryName == 'European Union') {

    } else {
        output1.push(jsonFromLine1);

        output1.sort(function(a, b) {
            return b.PurchasingPower - a.PurchasingPower;
        });


    }
});

rl.on('close', function(line) {
    shifted = output1.shift();
    console.log(output1);
    myWriteStream1.write(JSON.stringify(output1, null, 2));

});

// Sorting by PurchasingPower close
// ---------------------------------------------------------------------------------------------------

// Sorting by GDP_2013_Billions
rl.on('line', (line) => {
    var jsonFromLine2 = {};


    var lineSplit = line.split(',');

    jsonFromLine2.CountryName = lineSplit[0];
    jsonFromLine2.GDP_2013_Billions = lineSplit[18].toString();
    //  jsonFromLine.Population_2013=lineSplit[5];
    // jsonFromLine2.PurchasingPower = lineSplit[23];
    if (jsonFromLine2.CountryName == 'World' || jsonFromLine2.CountryName == 'European Union') {

    } else {
        output2.push(jsonFromLine2);
         output2.sort(function(a, b) {
            return b.GDP_2013_Billions - a.GDP_2013_Billions;
        });
     }
 });

rl.on('close', function(line) {
    shifted = output2.shift();
    console.log(output2);
    myWriteStream2.write(JSON.stringify(output2, null, 2));

});
        


   