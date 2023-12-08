function validation() {
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
        document.getElementById("emailerror").innerText = "Please enter email";
    } else if (!emailcheck.test(email)) {
        document.getElementById("emailerror").innerText = "Please enter valid email";
    } else {
        document.getElementById("emailerror").innerText = ""
    }

    if (password === "") {
        document.getElementById("passworderror").innerHTML = "Please enter password";
    } else {
        document.getElementById("passworderror").innerHTML = ""
    }

    let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (userRecords.some((v) => {
        return v.email !== email
    })) {
        alert("Invalid email")
        return false
    }

    if (email && emailcheck.test(email) && password) {
        const values = {
            email: email,
            username: userRecords[0].name,
            token: makeid(10),
        }
        localStorage.setItem("loginInfo", JSON.stringify(values))
        window.location.replace("homePage.html");
    }
    return false;
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function savedata() {
    let name, email, password;
    name = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (userRecords.some((v) => {
        return v.email == email
    })) {
        alert("duplicate")

    }
    else {
        userRecords.push({
            "name": name,
            "email": email,
            "password": password,
        })

        localStorage.setItem("users", JSON.stringify(userRecords))
    }
}


