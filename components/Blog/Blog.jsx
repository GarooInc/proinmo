"use client";
import React, { useState, useEffect } from 'react'
import BlogPost from '../BlogPost/BlogPost'
import PocketBase from 'pocketbase'


const Blog = () => {
    const [posts, setPosts] = useState([]);

    const pb = new PocketBase('http://3.133.139.104/proinmo')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Blog').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setPosts(records)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [])

    return (
        <div className="w-full flex flex-col justify-center text-center items-center gap-4">
            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
                {posts.map((post, index) => (
                    <BlogPost key={index} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
