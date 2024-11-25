import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [formData , setFormData] =useState({});
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange=(e) =>{
    
    setFormData({...formData, [e.target.id]:e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true); // Show loading state
      setError(null); // Clear previous errors
  
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      setLoading(false); // Stop loading state
  
      if (!res.ok) {
        // Set error message if the response is not OK
        setError(data.message || 'Something went wrong');
        return;
      }
  
      // If successful, redirect to sign-in page
      setError(null);
      navigate('/sign-in');
    } catch (err) {
      setLoading(false); // Stop loading state
      setError(err.message || 'Network error occurred'); // Handle fetch/network errors
    }
  };
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'> Sign Up</h1>
      <form onSubmit ={handleSubmit} className='flex flex-col gap-4 '>
        <input type ="text" placeholder='UserName '
        id="username" className='bg-scale-100 p-3 rounded-lg' onChange={handleChange}/>
         <input type ="email" placeholder='Email '
        id="email" className='bg-scale-100 p-3 rounded-lg' onChange={handleChange}/>
         <input type ="password" placeholder='Password'
        id="password" className='bg-scale-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled = {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80  '> 
          {loading ? 'Loading...': 'Sign Up'}
        </button>

      </form>
      <div className='flex gap-2 mt-5'>
        <p>
          Have an Account?
        </p>
        <Link to ="/sign-in">
        <span className='text-blue-500'>Sign In </span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'something went wrong !'}</p>
    </div>
  )
}
