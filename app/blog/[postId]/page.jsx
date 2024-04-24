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
            <div className="flex flex-col w-full h-full mx-auto pt-20 lg:pt-40 lg:px-10 px-8 ">
                <h1 className="text-lg lg:text-xl font-bold font-montserrat text-start lg:text-center py-4 m-0">{post.title}</h1>
                <div className="text-grayish text-sm lg:text-base font-montserrat blog-content"  dangerouslySetInnerHTML={{ __html: post.post }}></div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage;
