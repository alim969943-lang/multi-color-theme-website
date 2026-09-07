console.log("harry is a hacker")
console.log("rohan is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

const fn =() => {
    console.log("nothing")
}

const callback = (arg, fn, ) => {
    console.log(arg)
fn()

}

const loadscript = (src, callback) => {
    let sc = document.createElement("scripts");
    sc.src = src;
    sc.onload = callback("aleem", fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)