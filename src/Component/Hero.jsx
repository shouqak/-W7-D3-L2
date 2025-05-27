import React from 'react'

function Hero() {
  return (
    <div>
        
<div
    className="px-7 border-b-1 border-amber-700 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 ">
    <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1
            className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold">
Discover Articles That Spark Curiosity
        </h1>
        <p className="text-sm text-amber-900 md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left ">
           Dive into a world of ideas, insights, and inspiration. Whether you're exploring new topics or deepening your knowledge, our carefully curated articles are here to inform, entertain, and ignite your thinking.</p>
        
    </div>
    <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <img className="rounded-3xl w-full"
            src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""/>
    </div>
</div>


    </div>
  )
}

export default Hero