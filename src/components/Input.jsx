/* eslint-disable react/prop-types */
import { useId } from 'react';

const Input = ({ label, type = 'text', ...delegated }) => {
  const id = useId();

  return (
    <div className='mb-5'>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>
      <input
        {...delegated}
        type={type}
        id={id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      />
    </div>
  );
};

export default Input;
