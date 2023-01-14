
import React from 'react'
import Image from "next/image";
import Headerimage from "../public/Header image.svg";



function Banner() {
  return (
    <div className='relative sm:h-[628px] lg-h-[790px]' >
      <Image  src={Headerimage}
      alt="Take alot banner"priority fill cover />

    </div>
  )
}

export default Banner


