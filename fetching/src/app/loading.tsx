import React from 'react'

const loading = () => {
  return (
    <div>
       <section className='bg-green-300 h-screen w-full'>
       <div className='h-screen flex justify-center items-center'>
      <div className="relative">
        <div className="w-20 h-20 border-lime-200 border-2 rounded-full" />
        <div className="w-20 h-20 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      <div className="relative">
        <div className="w-10 h-10 border-lime-200 border-2 rounded-full" />
        <div className="w-10 h-10 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      <div className="relative">
        <div className="w-5 h-5 border-lime-200 border-2 rounded-full" />
        <div className="w-5 h-5 border-lime-700 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      
    </div>
    </section>
    </div>
  )
}

export default loading