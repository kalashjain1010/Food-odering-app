import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'

function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className="text-center mb-4">
            <div className='uppercase text-gray-500 font-semibold leading-4'>check out</div>
            <div className='text-orange-500 italic text-4xl font-bold '>Menu</div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu
