import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
      console.log(email);
      console.log(password);
    }

    const handleEmailChange = (e) =>{
       console.log(e.target.value);
        setEmail(e.target.value);  
    }
    const handlePasswordChange = e =>{
        if (password.length < 6) {
            setError('pass must be 6 character')
        }
        else{
            setError('');
        }
        console.log(e.target.value);
        setPassword(e.target.value);

    }


    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input  type="text" name="name"  placeholder="enter your name" /> <br />
                <input onChange={handleEmailChange} type="email" name="email"  placeholder="Email" required/> <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="password" required/> <br />
                <input type="submit" value="Submit"  />
                {
                    error && <p>your password must be at least 6 character</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;