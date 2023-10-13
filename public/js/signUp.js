const signUpBTN = document.querySelector('#signUpBTN');


const singUpHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const gender = document.querySelector('#gender').value;

    console.log(gender);
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);  
    
    if (email && password && firstName && lastName && gender) {
        const response = await fetch ('/api/user/', {
            method: 'POST',
            body: JSON.stringify({email, password, firstName, lastName, gender }),
            headers: { 'Content-Type': 'application/json' },
        });
    };

    // if (response.ok) {
    //     document.location.replace('/');
    // } else {
    //     alert('Failed to Sign up!')
    // };
};

signUpBTN.addEventListener('click', singUpHandler);