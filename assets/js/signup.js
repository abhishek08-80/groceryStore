function validation() {
    let name, email, password,confirmpassword;
    name = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirmpassword = document.getElementById("confirmpassword").value;

    let usercheck = /^[A-Za-z.]$/;
    let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{0,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (!username) {
        document.getElementById("usererror").innerHTML = "Please enter username";

    } else if (usercheck.test(username)) {
        document.getElementById("usererror").innerHTML = "Please enter valid username";
    }
    else {
        document.getElementById("usererror").innerHTML = "";
    }

    if (!email) {
        document.getElementById("emailerror").innerText = "Please enter email";

    } else if (!emailcheck.test(email)) {
        document.getElementById("emailerror").innerText = "Please enter valid email";

    } else {
        document.getElementById("emailerror").innerText = ""
    }

    if (password === "") {
        document.getElementById("passworderror").innerHTML = "Please enter password";
    }
    else if (passwordcheck.test(password)) {
        document.getElementById("passworderror").innerHTML = "Please enter strong password";
        // location.href = "login.html";        
    } else {
        document.getElementById("passworderror").innerHTML = "";
    }

    if (password !== confirmpassword) {
        document.getElementById("confirmpassworderror").innerHTML = "* Password doesn't match!";
    } else {
        document.getElementById("confirmpassworderror").innerHTML = "";
    }

    if (username && password && confirmpassword && email && password === confirmpassword && emailcheck.test(email)) {
        // window.location.replace("login.html");
        let userRecords = new Array();
        userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[]
        if (userRecords.some((v) => {
            return v.email == email
        })) {
            alert("user already exists")
        }
        else {
            userRecords.push({
                "name": name,
                "email": email,
                "password": password,
                "confirmpassword":confirmpassword
            })
            localStorage.setItem("users", JSON.stringify(userRecords))
            window.location.href="homePage.html";
        }
    }
   
}
