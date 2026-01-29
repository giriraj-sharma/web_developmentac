const button = document.querySelector("button");

button.addEventListener("click", function () {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const gender = document.querySelector('input[name="gender"]:checked');

    console.log("Gender:", gender.value);
    console.log("Height:", height);
    console.log("Weight:", weight);

    const hInMeter = height / 100;

    const bmi = (weight / (hInMeter * hInMeter)).toFixed(1);

    let solution = document.querySelector("body");

    solution.innerHTML = `<h1> Your BMI is: ${bmi} </h1>`
});