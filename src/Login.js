import { useState } from 'react';

function Login ()  {
        const [inpval, setInpval] = useState({
            email:"",
            password:""
        })
        console.log(inpval);
        const setVal = (e) => {
            const {name, value} = e.target;
            setInpval(()=> {
                return{ ...inpval, [name] : value}
            })
        }
        return (
            <>
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Welcome Back, Log In</h1>
                        </div>
                        <form>
                            <div className="form_input">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    value={inpval.email}
                                    onChange={setVal}
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email Address"
                                />
                            </div>
    
                            <div className="form_input">
                                <label htmlFor="password">Password</label>
                                    <input
                                        type='password'
                                        value={inpval.password}
                                        onChange={setVal}
                                        name="password"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />  
                            </div>
                            <button className="btn">Login</button>
                        </form>
                    </div>
                </section>
            </>
        );
    };
    
    export default Login
    
