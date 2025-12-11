import { useEffect, useState } from 'react'
import ProfileComponent from '../Components/ProfileComponent'
import DisplayPosts from "../Components/DisplayPosts";
import SkeletonLoading from "../Components/SkeletonLoading";
import { getUserPostsApi } from '../Services/PostsServices';
import { useParams } from 'react-router-dom';



export default function UserProfilePages() {
  const [isLoading, setIsLoading] = useState(false);
  const [userPosts, setUserPost] = useState(null);
  const { id } = useParams();


  async function getProfileUser() {
    setIsLoading(true)
    const { posts, message } = await getUserPostsApi(id)
        console.log(posts);
        
    if (message == "success") {
      setUserPost(posts)
      setIsLoading(false)
      console.log(userPosts);
      
    }
  }
  useEffect(() => {
    getProfileUser();
  }, [])







  return (
    <div>
      {!userPosts && isLoading ? <SkeletonLoading /> : <>
        {userPosts&& <ProfileComponent avatar={userPosts[0].user.photo} userName={userPosts[0].user.name} dateOfBirth="12-12-2102" />}
        {userPosts?.map((userPost) => < DisplayPosts callSinglePost={getProfileUser} post={userPost} key={userPosts.id} />)}
      </>}
    </div>
  )
}
