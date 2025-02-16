<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pro Clean Services</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required>
        
        <button type="submit">Submit</button>
    </form>
    
    <h2>Entered Information:</h2>
    <p id="output"></p>
    
    <script>
        document.getElementById("userForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            
            document.getElementById("output").innerText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;
        });
    </script>
</body>
</html>