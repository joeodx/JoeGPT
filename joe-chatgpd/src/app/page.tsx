import React from 'react';
import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

// import Image from 'next/image'
function page() {
  return (
    
    <div className=" flex flex-col items-center justify-center bg-gray h-screen px-2 text-white">
      <h1 className=" text-6xl font-bold mb-20">JoeGPT</h1>
      {/* <Image
      src="/image.png"
      width={50}
      height={50}
      alt="Picture of the author"
    /> */}
<div className="flex space-x-2 text-center">
    <div>
      <div>
      <div className='flex flex-col items-center justify-center mb-5'>
      <SunIcon className='h-8 w-8' />
<h2>Exampless</h2>
</div>

      <div className='space-y-2' >
      <p className='infoText'>"Explain something to me"</p>
      <p className='infoText'>"What is the differnce between a dog and a cat?"</p>
      <p className='infoText'>"When is AI going to take over and should I run?"</p>
    </div>
    </div>
    </div>
    <div>
      <div>
      <div className='flex flex-col items-center justify-center mb-5'>
      <BoltIcon className='h-8 w-8' />
<h2>Capabilities</h2>
</div>

      <div className='space-y-2' >
      <p className='infoText'>Change the JoeGPT model to use</p>
      <p className='infoText'>I would tell you where our messages is stored but I dont want too </p>
      <p className='infoText'>Joe will personally reccommden you to School Of Code </p>
    </div>
    </div>
    </div>
    <div>
      <div>
      <div className='flex flex-col items-center justify-center mb-5'>
      <ExclamationTriangleIcon className='h-8 w-8' />
<h2>Limitations</h2>
</div>

      <div className='space-y-2' >
      <p className='infoText'>May occasionally generate information to make Joe look good</p>
      <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
      <p className='infoText'>Limited knowledge of world after 2023</p>
    </div>
    </div>
    </div>
    </div>
      </div>
  )
}

export default page