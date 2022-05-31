const loginFormHandler = async (event) => {
    event.preventDefault();


    const username = document.querySelector('#username-login').val.trim();
    const password = document.querySelector('#password-login').val.trim();

    if (username && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: { 'Content-Type' : 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else{
            alert('Please check username or password');
        }
    }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);