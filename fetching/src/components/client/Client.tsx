"use client"
import React, { useEffect , useState} from 'react'
import {Star} from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { SkeletonCard } from '../skeleton/SkeletonCard'


interface Response {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Client = () => {
  const [response , setResponse] = useState<Response[]>([])
  const [loading , setLoading] = useState(false)

    useEffect   (() => {
      async function fetchData() {
        setLoading(true)
        const data = await fetch(" https://fakestoreapi.com/products")
        const response = await data.json()
        setResponse(response) 
        setLoading(false)
        console.log(response)
       }
       fetchData()
    } ,[])

 
  return (
    <section className='bg-secondary h-full  flex justify-between items-center flex-col max-w-full'>
     
        <h1 className='text-myorange text-6xl'>Client</h1>
        <Link href={'/'}>Back to Home 🏠</Link>
          <div className=' h-[90%]  md:w-[90%] bg-primary grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 lg:gap-6  p-2 md:p-4'>
           {loading ?
             Array.from({ length: 6 }).map((_, index) => (
               <SkeletonCard key={index} />
             ))
          
  :
            response.map((item , index) => (
        
            
              <div  key={index} className='flex flex-col justify-center  rounded-md hover:shadow-2xl hover:translate-z-2 hover:shadow-myorange items-center h-[500px] w-[400px]'>
           
              <Image src={item.image} alt={item.title} width={200} height={250}  className='w-full h-1/2'/>
             
              <div className='w-full h-1/2 flex flex-col bg-white justify-around p-2 '>
              <h2 className='font-bold text-xl text-black'>{item.title}</h2>
              <p className='font-normal text-xl text-myorange'>{item.category}</p>
              <p className='font-normal text-xl text-gray-400'> Price:${item.price}</p>
             
              <p> <Star  className='text-myorange inline'/> Rating: {item.rating.rate} <span className='text-gray-400'>({item.rating.count})  </span></p>
             <button className='px-4 py-2 bg-black text-white hover:bg-myorange hover:text-balck'>Buy now</button>
              {/* <p>{item.description}</p> */}
              </div>
            </div>
         
             
           ))}
          
          </div>
   
      
    </section>
  )
}

export default Client
