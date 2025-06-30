import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../store/Reducers/AuthSlice';

const Login = () => {
   
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

 useEffect(() => {
 if(user.length !== 0){
  setEmail(user.email)
  setPassword(user.password)
}
 }, [user])


 

  const handleLogin = (e) => {
    e.preventDefault();
    
    // In a real app, you'd validate against a backend


if (user.email === email && user.password === password) { // Use '===' for strict equality
  dispatch(login()); // Dispatch a login action (e.g., using Redux)
  navigate('/'); // Navigate to the dashboard or home page
} else if (user.email !== email) { // Check if email is incorrect
  alert("Incorrect email");
} else if (user.password !== password) { // If email is correct, check if password is incorrect
  alert("Incorrect password");
}



  
  };

  return (
    <div className="flex flex-col scroll-none items-center justify-center min-h-screen bg-gray-100">
      {/* {user.length !== 0 &&(
      <div className='p-4 bg-white rounded-xl flex justify-evenly items-center shadow-md w-96 mb-2'>
        <img className='w-10 aspect-square p-1 rounded-full bg-black'></img>
        <div className='font-semibold text-black/80 '>
        <h1 className='capitalize'>{user.name ||" user Name"} </h1>
         <h1 className=''>{user.email ||" user Email"} </h1>
         </div>
       <button
            onClick={handleLogin}
            className="w-15 bg-pink-500 text-white p-2 flex rounded-full text-sm  hover:bg-pink-600"
          >
            Login
          </button>
      </div>)
} */}

      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-pink-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;