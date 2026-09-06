let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
document.querySelector(".box").innerHTML = "<b> yayy you were  clicked </b>enjoy your clicke!"
})

button.addEventListener("contextmenu", ()=>{
alert("Dont hack us by Right click please")
})

document.addEventListener("keydown", (e)=>{
console.log(e)
})