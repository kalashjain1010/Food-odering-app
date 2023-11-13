import React from 'react'

function SectionHeader(props) {
  return (
    <div>
       <div className="text-center mb-4">
            <div className='uppercase text-gray-500 font-semibold leading-4'>{props.sub}</div>
            <div className='text-orange-500 italic text-4xl font-bold '>{props.header}</div>
      </div>
    </div>
  )
}

export default SectionHeader
