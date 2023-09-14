function validateName() {
    var name = document.getElementById("submit-form").value;
  
    if (isNaN(name)) {
      alert("The name must be a string.");
      return false;
    }
  
    return true;
  }