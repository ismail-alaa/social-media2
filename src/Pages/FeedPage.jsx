
import React, { useContext, useEffect, useState } from 'react'
import getAllPostsApli from '../Services/PostsServices'
import DisplayPosts from '../Components/DisplayPosts';
import SkeletonLoading from '../Components/SkeletonLoading';
import CreatePost from '../Components/CreatePost';
import { authContext } from '../Contexts/AuthContext';

import HeadOfFeedPage from '../Components/HeadOfFeedPage';



export default function FeedPage() {

  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(authContext)

  const [posts, setPosts] = useState(null)

  async function getAllPosts() {
    setIsLoading(true)
    const data = await getAllPostsApli();
    if (data.message == "success") {
      console.log(data.posts);
      console.log(data);
      setPosts(data.posts);
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getAllPosts();


  }, [])
  return (!posts && isLoading ? <SkeletonLoading /> :
    <div className="grid gap-8 max-w-2xl mx-auto">

      {userData && <HeadOfFeedPage avatar={userData.photo} userName={userData.name} userId={userData._id} />}

      {userData && <CreatePost avatar={userData?.photo} userName={userData?.name} callAllPosts={getAllPosts} />}
      {posts?.map((post) => < DisplayPosts callAllPosts={getAllPosts} post={post} key={post.id} commentLimit={1} />)}
    </div>


  )
}
