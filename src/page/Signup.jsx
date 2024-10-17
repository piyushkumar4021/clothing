import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='max-w-sm mx-auto py-3'>
      <h2 className='text-4xl mb-3'>Create an Account</h2>

      <form>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Your Name
          </label>
          <input
            type='text'
            id='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='John Wick'
            required
          />
        </div>
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
            placeholder='name@flowbite.com'
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
            placeholder='Password'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='confirmPassword'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Confirm password
          </label>
          <input
            type='password'
            id='confirmPassword'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Confirm Password'
            required
          />
        </div>
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

export default Signup;
