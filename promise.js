console.log('this is promise'); 

let prom1 = new Promise ((resolve, reject) =>{
    let a = Math.random();
    if (a <0.5) {
        reject("No random number was supporting you")
    }
    else {
    setTimeout(() => {
        console.log("yes iam a done")
        resolve("aleem")
    }, 3000);
    }
})

let prom2 = new Promise ((resolve, reject) =>{
    let a = Math.random();
    if (a <0.5) {
        reject("No random number was supporting you")
    }
    else {
    setTimeout(() => {
        console.log("yes iam a done 2")
        resolve("aleem 2")
    }, 1000);
    }
})

let p3 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})