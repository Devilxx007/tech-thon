import React from 'react'
interface props {
    title: string
    subtitle: string
    image?:string
}
const PrizeCard = ({title,subtitle}:props) => {
  return (
    <div className=' border w-[325px] h-[325px] border-white rounded-lg flex flex-col items-center justify-center'>
        <h2 className=" text-4xl text-white">{title}</h2>
        <h2 className=" text-4xl text-white">{subtitle}</h2>
    </div>
  )
}

export default PrizeCard