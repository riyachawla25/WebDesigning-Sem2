function calculate() {
    
    let subjects = document.getElementsByClassName("marks");
    let total = 0;

     
    for(let i = 0; i < subjects.length; i++) {
        total += Number(subjects[i].value);
    }

    let average = total / 4;
    let grade;

    if (average >= 90)
        grade = "A";
    else if (average >= 75)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 40)
        grade = "D";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
        "Total = " + total +
        "<br>Average = " + average.toFixed(2) +
        "<br>Grade = " + grade;
}