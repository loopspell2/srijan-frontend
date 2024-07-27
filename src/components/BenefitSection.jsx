import React from 'react'
import { Copy, ArrowRight } from 'lucide-react'

export default function Benefits() {
    const benefits = [
        {
            title: 'Improvment Public Safty',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        },
        {
            title: 'Reduce maintenance costs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        },
        {
            title: 'Enhance Assets life cycle',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        },
        {
            title: 'Better Resource Utilization',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
        },
        
    ]
  return (
    <div className="px-2 py-2 md:px-6 md:py-10">
      
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-2 xl:gap-16">
      {benefits.map((item) => (
          <div  className="space-y-3">
            {/* <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              <Copy size={20} />
            </span> */}
            <h1 className="text-xl font-semibold capitalize text-black">{item.title}</h1>
            <p className="text-sm text-gray-500">
              {item.description}
            </p>
            <a
              href="#"
              className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
            >
              <span className="mx-1">read more</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
