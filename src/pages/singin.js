import React from "react";
// import { Link } from "react-router-dom";
export default function Signin(){
    return(
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 shadow-xl rounded-xl max-w-80">
                <h1 className="text-2xl font-bold mb-10 text-center">Sign IN</h1>
                <form>
                    {/* <input type="text" placeholder="username" className="mb-5 w-full px-3 py-2 border border-gray-300 rounded-md"/> */}
                    <input type="Eamail" placeholder="email" className="mb-5 w-full px-3 py-2 border border-gray-300 rounded-md"/>
                    <input type="password" placeholder="password" className="mb-5 w-full px-3 py-2 border border-gray-300 rounded-md"/>
                    
                    <button type="submit" className=" w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:text-black">Sign In</button>
                </form>
                {/* <p>Already have an account? <Link to="/signin" className="text-blue-600 hover:underline mt-5">Sign In</Link></p> */}
            </div>
        </div>
    )
}