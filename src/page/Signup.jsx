import { Link } from 'react-router-dom';
import { useRef } from 'react';
import useSignUp from '../hooks/useSignUp';
import Input from '../components/Input';

const SignUp = () => {
  const signUpFormRef = useRef(null);
  const { handleSubmit } = useSignUp(signUpFormRef);

  return (
    <div className='max-w-sm mx-auto py-3'>
      <h2 className='text-4xl mb-3'>Create an Account</h2>

      <form ref={signUpFormRef} onSubmit={handleSubmit}>
        <Input
          label='Your Name'
          placeholder='John Wick R'
          name='name'
          required
        />
        <Input
          label='Your email'
          type='email'
          placeholder='name@flowbite.com'
          name='email'
          required
        />
        <Input
          label='Your password'
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <Input
          label='Confim password'
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          required
        />

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Create
        </button>
      </form>

      <Link className='text-center block mt-4' to='../login'>
        Already have an account
      </Link>
    </div>
  );
};

export default SignUp;
