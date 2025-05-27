import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

function Articles() {

    const [title, setTitle] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // Set fetched products into state
        setTitle(response.data);
        
      })
      
  }, []);


  return (
 <div className="flex flex-wrap gap-6 justify-center">
      {title.map((post) => (
        <div key={post.id} className="flex flex-col items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
          <div className="flex items-center  mb-4">
            <h5 className="ml-3 text-amber-700 text-xl text-center font-semibold">
              {post.title}
            </h5>
          </div>
          
          <div>
            <p className="text-amber-900 font-semibold text-sm hover:underline flex items-center">
              <Link to={`/${post.id}`}>Learn More</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </p>
          </div>
        </div>
      ))}
    </div>  )
}

export default Articles