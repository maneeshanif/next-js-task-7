"use client"
import React, { useEffect } from 'react'

const Client = () => {
    useEffect   (() => {
      async function fetchData() {
        const data = await fetch(" https://fakestoreapi.com/products")
        const res = await data.json()
        console.log(res)
       }
       fetchData()
    } , [])
  return (
    <section className='bg-red-300 h-screen w-full'>
      
    </section>
  )
}

export default Client
