import React from 'react'
import ButtonDark from '../ButtonDark/ButtonDark'
import { useRouter } from "next/navigation"

const BlogPost = ({ post }) => {
    const router = useRouter()

    const handleReadMore = () => {
      const titleWithoutAccents = post.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const titleWithoutQuestionMarks = titleWithoutAccents.replace(/\?/g, "");
      const titleWithHyphens = titleWithoutQuestionMarks.replace(/\s/g, "-");
      router.push('/blog/' + titleWithHyphens + '_' + post.id);
  }

  return (
    <div className="flex flex-col justify-start items-start gap-4 w-full mt-4 lg:mx-10  shadow-lg p-4 border-b-4 border-gray">
        <h1 className="text-lg text-start lg:text-xl font-bold font-montserrat m-0">{post.title}</h1>
        <p className="text-grayish font-montserrat text-start">{post.snippet}</p>
        <div className="flex justify-end w-full">
            <ButtonDark text="Leer más" onClick={handleReadMore} />
        </div>
    </div>
  )
}

export default BlogPost;
