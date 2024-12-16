import React from 'react'

const Title = ({heading1, heading2, para}) => {
  return (
    <div className='text-center my-20'>
        <h1 className='text-3xl md:text-5xl   text-black font-bold uppercase'>{heading1} <span className='text-cyan-500'>{heading2}</span></h1>
        <p className='text-black sm:px-40 px-4 my-6'>{para}</p>
        <div class="mx-auto mt-2 h-2 w-44 bg-cyan-500 rounded-full"></div>

    </div>
  )
}

export default Title