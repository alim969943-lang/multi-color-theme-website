// async function getdata() {
//     stimulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getdata() {
    // stimulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() {

    console.log("loding moduls")

    console.log("Do something else")

    console.log("Load data")

    let data = await getdata()

    console.log(data)

    console.log("process data")

    console.log("task 2")
}
main()
// data.then((v) => {

//     console.log(data)

//     console.log("Process data")

// })