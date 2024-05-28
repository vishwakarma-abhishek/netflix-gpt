import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

        const [isSignIn, SetIsSignIn ] = useState(true)

        const handleSignIn =()=>{
            SetIsSignIn(!isSignIn);
        }
    return (

    <div className="">
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="background"/>
        </div>
        <div className="text-white">
            <form className="absolute bg-black p-12  w-3/12 my-64 mx-auto right-0 left-0 bg-opacity-75 rounded-lg px-14">
                {isSignIn ? <h1 className="text-2xl font-bold p-2">Sign In</h1> :
                            <h1 className="text-2xl font-bold p-2">Sign Up</h1>
                }
                { !isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg  border-white"/> }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg  " />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
                <button className="p-2 m-2 border-white bg-red-700 rounded-lg w-full my-6  bold">Sign In</button>

                { !isSignIn && <p className="pb-14"> Already have an account? <span className="font-bold cursor-pointer text-blue-300 text-lg" onClick={handleSignIn}>  Sign in →</span></p>}

                { isSignIn && <p className="pb-14">New  to  Netflix? <span className="font-bold cursor-pointer text-blue-300 text-lg hover:" onClick={handleSignIn}> Sign up </span> now.</p>}
            </form>
        </div>
    </div>
    );
};

export default Login;