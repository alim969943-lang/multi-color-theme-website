let students = ["shubh", "anjali", "shivani", "muktadeer", "arbaz", "ubed", "aleem", "farhan", 
    "ravindranatham", "shivesh", "kaif"]

    let houses = []

    for (const student of students) {
        if(student.length > 6){
            houses.push("gryfindorr")
        }
        else if(student.length > 8){ 
            houses.push("hufflepuff")
        }
        else if (student.length > 12){ 
            houses.push("ravenclaw")
        }
        else {
              houses.push("slytherin")
        }
    }

    console.log(houses)