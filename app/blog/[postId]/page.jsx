"use client";
import React, { useState, useEffect } from 'react'
import NavBarSecond from '@/components/NavBarSecond/NavBarSecond'
import PocketBase from 'pocketbase'

const BlogPage = ({params}) => {
    const [post , setPost] = useState('')
    const pb = new PocketBase('https://dev.garooinc.com/proinmo')
    pb.autoCancellation(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const record = await pb.collection('Blog').getOne(params.postId)
                setPost(record)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [params.postId])

  return (
    <div className='flex flex-col'>
      <NavBarSecond />
      <div className="w-full flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex flex-col w-full h-full mx-auto pt-20 lg:pt-40 px-10 ">
                <h1 className="text-xl lg:text-2xl font-bold font-montserrat text-center">{post.title}</h1>
                <div className="text-grayish text-sm lg:text-base font-montserrat blog-content"  dangerouslySetInnerHTML={{ __html: post.post }}></div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage;
