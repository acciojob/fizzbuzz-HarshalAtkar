let inputnumber = prompt("input number");

function gg(inputnumber) {
  if (inputnumber % 3 === 0 && inputnumber % 5 === 0) {
    alert(inputnumber + "\\nFizzBuzz");
  } else if (inputnumber % 3 === 0) {
    alert(inputnumber + "\\nFizz");
  } else if (inputnumber % 5 === 0) {
    alert(inputnumber + "\\nBuzz");
  }
}

gg(inputnumber);
