import React from 'react';
import { FaGoogle ,FaGithub } from "react-icons/fa";

const LoginWith = () => {
    return (
        <div>
            <h3 className='font-bold mb-5 '>Login With</h3>
            <div className='space-y-3'>
                <button className='btn btn-outline w-full text-blue-500'><FaGoogle />  Login with Google</button>
                <button className='btn btn-outline w-full'><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default LoginWith;