const loginBTN = document.querySelector('#loginBTN');

const loginHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log(email);
    console.log(password);

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        }
    }
};


loginBTN.addEventListener('click', loginHandler);