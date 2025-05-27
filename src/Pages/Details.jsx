import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';

function Details() {

     const [title, setTitle] = useState("");
    const {id} = useParams();
      useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(function (response) {
            // Set fetched products into state
            setTitle(response.data);
            
          })
          
      }, [id]);
  return (
    <>
     <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-amber-800 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Posts
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-amber-700 mb-4">{title.title}</h1>

      <hr className="border-t border-amber-900 my-6" />

      <div className="prose max-w-none text-slate-700">
        <p>{title.body}</p>
      </div>

    </div>
    </>
  )
}

export default Details