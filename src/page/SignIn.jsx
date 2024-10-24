import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useSignIn from '../hooks/useSignin';
import GoogleLogo from './../components/svgs/GoogleLogo';
import Input from './../components/Input';

const SignIn = () => {
  const signInFormRef = useRef(null);
  const { handleSignIn, handleSignInWithGoogle } = useSignIn(signInFormRef);

  return (
    <div className='max-w-sm mx-auto py-3'>
      <h2 className='text-4xl mb-3'>Sign in</h2>

      <form onSubmit={handleSignIn} ref={signInFormRef}>
        <Input
          label='Your email'
          type='email'
          placeholder='abc@xyz.com'
          name='email'
          required
        />
        <Input
          label='Your password'
          type='password'
          placeholder='password'
          name='password'
          required
        />

        <div className='flex gap-6 justify-between'>
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
            <GoogleLogo />
            <span className='ml-2'>Log in with Google</span>
          </button>
        </div>
      </form>

      <Link className='text-center block mt-4' to='../signup'>
        Don&lsquo;t have an account
      </Link>
    </div>
  );
};

export default SignIn;
