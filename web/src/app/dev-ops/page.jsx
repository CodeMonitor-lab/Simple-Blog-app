
import React from 'react'
import devOpsData from '@/data/devOpsModule/dev-opsModule.json'
import Link from 'next/link'

const page = async({params}) => {
    console.log( await params)

  return (
    <main className='flex gap-4 p-10'>
        {devOpsData.map((item, index) => (
            <section key={index} className="bg-purple-200 p-4 text-center flex items-center">
                <Link href={`/dev-ops/${item.slug}`} >
                <h2>{item.title}</h2>
                </Link>
            </section>
        ))} 
    </main>
  )
}

export default page