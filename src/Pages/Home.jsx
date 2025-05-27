import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Articles from '../Component/Articles';
import Hero from '../Component/Hero';

function Home() {
 
  return (
    <>
    <Hero/>
          <p className='text-center text-3xl font-bold text-amber-900  mt-3'>The Arterials</p>

   <Articles/>
   </>
  )
}

export default Home