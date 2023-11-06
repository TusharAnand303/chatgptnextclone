"use client"
import React from 'react'
import {SunIcon} from '@heroicons/react/24/outline';
import {BoltIcon} from '@heroicons/react/24/outline';
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

const page = () => {

  return (
   <>
   <div className='text-white flex flex-col items-center justify-center h-screen'>
    
    <h1 className='md:text-5xl lg:text-5xl xl:text-5xl text-3xl font-bold md:mb-20 lg:mb-20 xl:mb-20 mb-5 text-gray-600'>ChatGPT </h1>
    <div className='flex justify-center items-center gap-5 text-center md:flex-row lg:flex-row xl:flex-row flex-col '>

      <div className='flex flex-col justify-center items-center'>
        
      <div className='flex justify-center items-center mb-5  md:mb-5 lg:mb-5 xl:mb-5'>
        <div className='flex flex-col justify-center items-center'>
          {/* sun icon */}
          <SunIcon className='h-8 w-8'/>
          <h1>Examples</h1>
        </div>
      </div>
      {/* example text  */}
      <div className='space-y-2 m-2'>
        <p className=' p-4 bg-gray-700/50 rounded-lg max-w-[300px] truncate'>"Explain something to me"</p>
        <p className='hidden md:block xl:block lg:block p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"What is different between react js and next js"</p>
        <p className='hidden md:block xl:block lg:block p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"How tailwind css is better than css"</p>
      </div>
      </div>

      <div className='hidden md:block xl:block lg:block '>
      <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center mb-5'>
        <div className='flex flex-col justify-center items-center'>
          {/* sun icon */}
          <BoltIcon className='h-8 w-8'/>
          <h1>Capabilities</h1>
        </div>
      </div>
      {/* example text  */}
      <div className='space-y-2 m-2'>
        <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"It can write code for you forany language"</p>
        <p className='hidden md:block xl:block lg:block p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"It can debug the code for you"</p>
        <p className='hidden md:block xl:block lg:block p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"It can debug and correct the code for you in any language"</p>
      </div>
      </div>
      </div>

      <div className='hidden md:block xl:block lg:block'>
      <div className=' flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center mb-5'>
        <div className='flex flex-col justify-center items-center'>
          {/* sun icon */}
          <ExclamationTriangleIcon className='h-8 w-8'/>
          <h1>Limitations</h1>
        </div>
      </div>
      {/* example text  */}
      <div className='space-y-2 m-2'>
        <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"May not give correct answer"</p>
        <p className='hidden md:block xl:block lg:block p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"Limitation knowledge of world and events after 2021"</p>
        <p className='hidden md:block xl:block lg:block p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>"May not give answer of human emotion answers"</p>
      </div>
      </div>
      </div>
      
    </div>
   </div>
   </>
  )
}

export default page
