var output = [];
var cont = ['Australia', 'United Kingdom', "European", "Asia", "North America", 'South Africa']
count = [0, 0, 0, 0, 0, 0];
readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
    input: fs.createReadStream('Table_1.3.csv')
});
var my = fs.createWriteStream("output_5.json");
rl.on('line', (line) => {
    var jsonFromLine = {};
    var jsonFromLine1 = {};
    var lineSplit = line.split(',');
    jsonFromLine1.CountryName = lineSplit[0];
   if (jsonFromLine1.CountryName == 'Australia') {
        count[0]+= parseFloat(lineSplit[5])
    }
     else if (jsonFromLine1.CountryName == 'Argentina' || jsonFromLine1.CountryName == 'Brazil') {
        count[1]+= parseFloat(lineSplit[5])
    } 
    else if (jsonFromLine1.CountryName == 'United Kingdom' || jsonFromLine1.CountryName=='European Union' || jsonFromLine1.CountryName == 'France' || jsonFromLine1.CountryName == 'Russia' || jsonFromLine1.CountryName == 'Turkey') {
        count[2]+= parseFloat(lineSplit[5])
    }
     else if (jsonFromLine1.CountryName == 'China' || jsonFromLine1.CountryName == 'India' || jsonFromLine1.CountryName == 'Indonesia' || jsonFromLine1.CountryName == 'Japan' || jsonFromLine1.CountryName == 'Saudi Arabia' || jsonFromLine1.CountryName == 'Republic of Korea') {
        count[3]+= parseFloat(lineSplit[5])
               }
     else if (jsonFromLine1.CountryName == 'Mexico' || jsonFromLine1.CountryName == 'USA') {
        count[4]+= parseFloat(lineSplit[5])      
    } 
    else if (jsonFromLine1.CountryName == 'South Africa') {
        count[5]+= parseFloat(lineSplit[5])
    }
    })
rl.on('close', (line) =>{
    for(let i=0;i<6;i++)
    {
        var obj = {
            continent: cont[i],
            population: count[i]
        }
        output.push(obj)
    }
    my.write(JSON.stringify(output, null, 2))
})