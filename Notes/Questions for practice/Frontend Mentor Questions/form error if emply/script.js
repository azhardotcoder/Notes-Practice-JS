document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Retrieve form inputs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Check if any field is empty
    if (name === "" || email === "") {
        document.getElementById("error-msg").innerText = "Please fill in all fields";
        return;
    }

    // Check email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-msg").innerText = "Please enter a valid email address";
        return;
    }

    // If all validations pass, submit the form
    // Replace this with your form submission logic
    // For example:
    // document.getElementById("myForm").submit();
    alert("Form submitted successfully!");
  
});
