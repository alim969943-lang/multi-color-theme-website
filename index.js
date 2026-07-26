console.log("hello iam conditional tutorial")

let age =0;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if(age==18) {
    console.log("you can drive");
}

else if(age==1){
console.log("are you kidding")
}
else if(age==0){
console.log("are you aggain kidding me")
}


else{
    console.log("you cannot drive");
}

a = 6
b = 8
let c = a > b? (a - b): (b - a);
/*
translate to:
if(a>b){
let c = a - b;
}

else {
     let c = b - a
}
     */