import React from 'react'
import { SunIcon } from '@heroicons/react/24/outline'
import {  } from '@heroicons/react/24/outline'
import { ExclemationTriangleIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
function page() {
  return (
    
    <div className=" flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className=" text-6xl font-bold mb-20">JoeGPT</h1>
      {/* <Image
      src="/image.png"
      width={50}
      height={50}
      alt="Picture of the author"
    /> */}

    <div>
      <div>
      <div className='flex flex-col items-center justify-center mb-5'>
      <SunIcon className='h-8 w-8' />
<h2>Examples</h2>
</div>

      <div className='space-y-2' >
      <p className='infoText'>"Explain something to me"</p>
      <p className='infoText'>"What is the differnce between a dog and a cat?"</p>
      <p className='infoText'>"When is AI going to take over?"</p>
    </div>
    </div>
    </div>
    <div>
      <div>
      <div className='flex flex-col items-center justify-center mb-5'>
      <SunIcon className='h-8 w-8' />
<h2>Capabilities</h2>
</div>

      <div className='space-y-2' >
      <p className='infoText'>"Explain something to me"</p>
      <p className='infoText'>"What is the differnce between a dog and a cat?"</p>
      <p className='infoText'>"When is AI going to take over?"</p>
    </div>
    </div>
    </div>
    <div>
      <div>
      <div className='flex flex-col items-center justify-center mb-5'>
      <SunIcon className='h-8 w-8' />
<h2>Limitations</h2>
</div>

      <div className='space-y-2' >
      <p className='infoText'>"Explain something to me"</p>
      <p className='infoText'>"What is the differnce between a dog and a cat?"</p>
      <p className='infoText'>"When is AI going to take over?"</p>
    </div>
    </div>
    </div>
      </div>
  )
}

export default page