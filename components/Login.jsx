"use client"
import { signIn, useSession} from 'next-auth/react';
import Image from 'next/image';

const Login = () => {

  return (
   <>
   <div className='justify-center flex items-center flex-col h-screen bg-white'>
   <div className='-mt-20 items-center justify-center flex flex-col gap-10'>
   <Image
      // src="https://links.papareact.com/2i6"
      src="/favicon.svg"
      width={100}
      height={100}
      alt='chat gpt logo'
      className='rounded-full'
    />
    <h1 className='font-bold text-3xl'>Welcome to chatGPT</h1>
    <button className='flex justify-center items-center border border-[#10A37F] rounded-md px-8 py-2.5 gap-2' onClick={()=>signIn('google')}>
      <Image src="/google.svg" width={30} height={30} alt='logo'/>
      Continue with Google
    </button>
   </div>
   </div>
   
   </>
  )
}

export default Login
