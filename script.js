document.getElementById("visaForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your visa application has been submitted.");
    this.reset();
  });
  