function showMessage() {
    var Name = document.getElementById("nameBox").value; 
    var email = document.getElementById("emailBox").value; 

    if (Name === "" || email === "") {
        document.getElementById("output").value = "Please enter both your name and email.";
    } else {
        document.getElementById("output").value = "Welcome to our newsletter. Thank You.";
    }
}