'use client'

import { signIn } from "next-auth/react"
import Image from "next/image";
 
function Login() {
  return (
    <div className=" bg-[#bea060] h-screen font-bold flex flex-col items-center justify-center text-center">
        <Image
      src="/image.png"
      width={400}
      height={400}
      alt="Picture of the author"
    /> 
    <button 
    onClick={() => signIn ('google')} className="text-white font-bold text-3xl animate-pulse">
        Sign  In  to  Use  JoeGPT</button>
    </div>
  )
}

export default Login