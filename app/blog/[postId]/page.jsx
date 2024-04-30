"use client";
import React, { useState, useEffect } from 'react'
import NavBarSecond from '@/components/NavBarSecond/NavBarSecond'
import PocketBase from 'pocketbase'
import { FaLinkedinIn } from "react-icons/fa"
import MetaTags from '@/components/MetaTags/MetaTags'



const BlogPage = ({params}) => {
    const [post , setPost] = useState('')
    const pb = new PocketBase('https://dev.garooinc.com/proinmo')
    pb.autoCancellation(false)

    const current = params.postId.split('_')[1]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const record = await pb.collection('Blog').getOne(current)
                setPost(record)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [params.postId])

    const createLinkedInShareLink = (url, title) => {
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    }

    const postUrl = `https://www.proinmo502.com/blog/${params.postId}`

    useEffect(() => {
        if (post.imgbanner) {
            const imageUrl = `https://dev.garooinc.com/proinmo/api/files/${post.collectionId}/${post.id}/${post.imgbanner}?token=`
            document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl)
        }
    }, [post])    


  return (
    <div className='flex flex-col'>
        <MetaTags title={post.title} description={post.title} image={post.imgbanner} />
      <NavBarSecond />
      <div className="w-full flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex flex-col w-full h-full mx-auto pt-20 lg:pt-40 px-8 lg:px-40 ">
                {post.imgbanner && <img src={`https://dev.garooinc.com/proinmo/api/files/${post.collectionId}/${post.id}/${post.imgbanner}?token=`} alt="banner" className="w-full lg:h-[600px] h-60 object-cover object-center" />}
                <h1 className="text-lg lg:text-xl font-bold font-montserrat text-start lg:text-center py-4 m-0">{post.title}</h1>
                <div className="text-grayish text-sm lg:text-base font-montserrat blog-content"  dangerouslySetInnerHTML={{ __html: post.post }}></div>
                <div className="flex py-4 justify-end w-full">
                    <div className='flex flex-col gap-2'>
                        <span className='text-grayish text-sm lg:text-base font-montserrat'>Compartir en</span>
                        <a href={createLinkedInShareLink(postUrl,post.title)} target="_blank" rel="noopener noreferrer" className='flex justify-end'>
                            <FaLinkedinIn className='text-kaqui text-lg'></FaLinkedinIn>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage;
