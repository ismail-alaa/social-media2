
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePostApi } from '../Services/PostsServices'
import DisplayPosts from '../Components/DisplayPosts'
import SkeletonLoading from '../Components/SkeletonLoading'




export default function PostDetailsPage() {
  const [post, setPost] = useState(null)
  const { id } = useParams()




  async function getSinglePost() {
    const { message, post } = await getSinglePostApi(id)
    if (message == "success") {
      setPost(post)
    }
  }




  useEffect(() => {
    getSinglePost();
  }, [])





  return (
    <div>
      {post ? <DisplayPosts callSinglePost={getSinglePost} post={post} /> : <SkeletonLoading />}
    </div>
  )
}
