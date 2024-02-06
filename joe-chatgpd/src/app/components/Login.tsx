'use client'

import { signIn } from "next-auth/react";
import Image from "next/image";
 
function Login() {
  return (
    <div className=" bg-[#bea060] h-screen font-bold flex flex-col items-center justify-center text-center">
        <Image
      src="/chat.png"
      width={400}
      height={400}
      alt="Picture of the author"
    /> 
    <button>Sign  In  to  Use  JoeGPT</button>
    </div>
  )
}

export default Login