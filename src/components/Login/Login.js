import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input type="text" name="email" id="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Enter your password"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;