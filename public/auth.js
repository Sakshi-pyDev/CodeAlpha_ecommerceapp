async function registerUser() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                password
            })
        }
    );

    const data = await response.json();

    Toastify({
    text: data.message,
    duration: 3000,
    gravity: "top",
    position: "right",
}).showToast();

    window.location.href = "login.html";
}



async function loginUser() {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })
        }
    );

    const data = await response.json();

    if(data.token){

        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);

        Toastify({
    text: "Login Successful 🎉",
    duration: 3000,
    gravity: "top",
    position: "right",
}).showToast();

        window.location.href = "index.html";

    } else {

        alert(data.message);
    }
}