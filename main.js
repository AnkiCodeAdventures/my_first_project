document.getElementById("mybutton").addEventListener("click", () => {
  let person = prompt("Please enter your name", "Harry Potter");
  if (person) {
    alert(`Hi ${person}, your order coming right up!!!`);
    alert("Have a nice day!!!");
    alert("Please visit us again");
    alert("Also bring your friends");
  } else {
    person = prompt("Please enter your name", "Harry Potter");
  }
});
