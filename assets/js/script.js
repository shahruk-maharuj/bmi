const calculateBMI = () => {
  const shortName = document.getElementById("add-name").value;
  const weight = document.getElementById("add-weight").value;
  const height = document.getElementById("add-height").value;

  if (!weight || !height || isNaN(weight) || isNaN(height) || height === NaN) {
    document.getElementById("result").innerHTML = "Please enter valid value";
    return;
  }

  let BMI = (weight / height ** 2).toFixed(2);
  document.getElementById(
    "result"
  ).innerHTML = `Hello ${shortName}, your BMI is ${BMI}`;
};
