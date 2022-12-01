function submit() {
  const gradeValue = document.getElementById("grade").value;
  let result = "";
  let color;
    
  if (value < 60) {
    result = "F";   color = 'red'
  } else if (value >= 60 && value <= 69) {
    result = "D";  color = 'red'
  } else if (value >= 70 && value <= 79) {
    result = "C";  color = 'yellow'
  } else if (value >= 80 && value <= 89) {
    result = "B"; color = 'green'
  } else if (value >= 90) {
    result = "A";  color = 'green'
  }
  
  document.getElementById("result").textContent = "This is your grade:  " + result;
  document.getElementById('form').style.backgroundColor = color
}
