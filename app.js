let cities = ["karachi","lahore","islamabad"];

cities[cities.length]="quetta"
cities[cities.length]="multan"

cities[1]="quetta"
console.log(cities)
        .push
let cities=(["karachi","lahore","islamabad"])
cities.push("quetta","multan","hydrabad")
console.log(cities)
        .unshift
let cities=(["karachi","lahore","islamabad"])
cities.unshift("quetta","multan","hydrabad")
console.log(cities)
let cities=(["karachi","lahore","islamabad"])
cities.pop("quetta","multan","hydrabad")
console.log(cities)
let cities=(["karachi","lahore","islamabad"])
cities.shift("quetta","multan","hydrabad")
console.log(cities)
let cities=["karachi","lahore","islamabad"]
cities.splice(1,1)
console.log(cities)
let cities=["karachi","lahore","islamabad"]
cities.splice(1,0,"quetta")
console.log(cities)

let cities=["karachi","lahore","islamabad"]

console.log(cities.slice(0,2))

let str="Hello world"
console.log(str.slice(0,5))

let cities=["karachi","lahore","islamabad"]
for(let i=0; i<cities.length; i++){
    console.log(cities[i])
}

let cities0=["karachi","lahore","islamabad"]
let cities= prompt("city bata konsi dhondo")
for(let i=0 ; i<cities0.length ; i++){
        if(cities0[i]==cities){
                console.log("match")
}
}
let cities0=["karachi","lahore","islamabad"]
let cities= prompt("city bata konsi dhondo")
let flag=false
for(let i=0 ; i<cities0.length ; i++){
        if(cities0[i]==cities){
                console.log("match");
                flag=true
                break;
}else{
        console.log("no match");
}
}
if( flag==false){
        console.log("no match");
}
