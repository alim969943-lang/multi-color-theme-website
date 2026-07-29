function nice(name) {
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " your tshirt is nice!")
    console.log("hey " + name + " your practice is good!")
}

function sum(a, b, c = 4) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(3, 5)
result2 = sum(3, 15)
result3 = sum(12, 5, 1)

console.log("the sum of these number is: ", result1)
console.log("the sum of these number is: ", result2)
console.log("the sum of these number is: ", result3)

const func1 = (x) => {
    console.log("iam an arrow function", x)
}

func1(34);
func1(64);
func1(33);