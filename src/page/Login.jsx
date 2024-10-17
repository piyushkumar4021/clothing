import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigate('/');
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className='max-w-sm mx-auto py-3 px-4'>
      <h2 className='text-4xl mb-3'>Log in</h2>

      <form>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='abc@xyz.com'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Your password
          </label>
          <input
            type='password'
            id='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='password'
            required
          />
        </div>

        <div className='flex gap-6'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Log in
          </button>

          <button
            type='button'
            className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
            onClick={handleSignInWithGoogle}
          >
            <svg
              className='w-4 h-4 me-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 19'
            >
              <path
                fillRule='evenodd'
                d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
                clipRule='evenodd'
              />
            </svg>
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
