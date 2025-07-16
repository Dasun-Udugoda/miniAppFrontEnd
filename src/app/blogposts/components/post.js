"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');


    useEffect(() => {
        refreshPosts();
    },[]);

  const refreshPosts = () => {
    console.log("Sending request to Django...");
        axios.get(`http://127.0.0.1:8000/blogpost/`)
        .then(response => {
            console.log(response.data);
            setPosts(response.data);
        })
        .catch(err => {
            console.log("nothing")
            setError('Failed to fetch data');
            console.error(err);
        });  
  }

  const deletePost = (id) => { 
    axios.delete(`http://127.0.0.1:8000/blogpost/${id}/`).then(()=> {
        refreshPosts()
    })
  }


  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {posts.map(post => (
        
        <article className="flex max-w-xl flex-col items-start justify-between" key = {post.id}>
            <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.created_at} className="text-gray-500">
                {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric"
                })}
            </time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">esolutions</a>
            <button onClick={() => deletePost(post.id)}>X</button>

            </div>
            <div className="group relative grow">
        <h3 className="mt-3 text-lg leading-6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a href="#">
                <span className="absolute inset-0"></span>
                {post.title}
                </a>
            </h3>
            {post.content}
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
            <img src="/monash-logo.png" alt="" className="size-10 rounded-full bg-gray-50" />
            <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                <a href="#">
                    <span className="absolute inset-0"></span>
                    Anonymous
                </a>
                </p>
                <p className="text-gray-600">not sure</p>
            </div>
            </div>
        </article>
      ))}
      </div>
  );

  }
  