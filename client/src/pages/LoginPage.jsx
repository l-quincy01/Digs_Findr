import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext.jsx";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext)
    async function loginFunc(ev) {
        ev.preventDefault();
        try {
            
            const {data} = await axios.post('/login', {email, password});
            setUser(data);
            alert("Login successful");
            setRedirect(true);
        } catch (e) {
            alert("Login Error");
        }

      
    }
    if (redirect) 
    { return < Navigate to ={'/'}/>}

    return (

        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-64">
                <h1 className=" text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto " onSubmit={loginFunc}>
                    <input
                        type="email" placeholder="your@email.com"
                        value={email} onChange={ev => setEmail(ev.target.value)}
                    />
                    <input
                        type="password" placeholder="password"
                        value={password} onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Login</button>
                    <div>   Dont have an account?
                        <Link className="underline" to={"/register"}>Register Here</Link>
                    </div>
                </form>

            </div>
        </div>
    );
}