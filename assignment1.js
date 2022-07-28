// Ques.1 : Write a program to print a array of five names in reverses order.
let names=["Jane","Mary","Shatakshi","Sarah", "Upali"];
console.log("Ques1.");
console.log("Names in Reverse Order:");
for(let i=names.length;i>=0;i--){    
    console.log(names[i])
}



//Ques 2: Create a array of  country objects having name capital and population as properties.
//Print the countries whose population is less than 2000.
let countries = [
    {
        "country":"India",
        "capital":"Delhi",
        "population":"2010",
    },
    {
        "country":"Japan",
        "capital":"Tokyo",
        "population":"1590",
    },
    {
        "country":"Belgium",
        "capital":"Brussels",
        "population":"1200",
    },
    {
        "country":"Russia",
        "capital":"Moscow",
        "population":"1460",
    },
    {
        "country":"China",
        "capital":"Beijing",
        "population":"2100",
    }
]

console.log();
console.log();
console.log("Ques2.");
console.log("Countries with population less than 2000:");

for(let j=0;j<countries.length;j++){  
    if(countries[j].population<2000){  
    console.log(countries[j].country+" : "+countries[j].capital+" : "+countries[j].population)}
}