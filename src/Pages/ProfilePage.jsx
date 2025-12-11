
import { useContext, useEffect, useState } from "react";
import ProfileComponent from '../Components/ProfileComponent'
import { authContext } from '../Contexts/AuthContext'
import { getUserPostsApi } from "../Services/PostsServices";
import DisplayPosts from "../Components/DisplayPosts";
import SkeletonLoading from "../Components/SkeletonLoading";
import CreatePost from "../Components/CreatePost";


export default function ProfilePage() {
  const { userData } = useContext(authContext)
  const [userPosts, setUserPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);






  async function getProfileUser() {
    setIsLoading(true)
    const { posts, message } = await getUserPostsApi(userData._id)
    if (message == "success") {
      setUserPost(posts)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getProfileUser();
  }, [])



  return (
    <div>
      {!userPosts && isLoading ? <SkeletonLoading /> : <>
        <ProfileComponent getProfileUser={getProfileUser} avatar={userData.photo}   userName={userData.name}  dateOfBirth={userData.dateOfBirth} />
        <CreatePost key={userData._id} avatar={userData.photo} userName={userData.name} callAllPosts={getProfileUser} />
        {userPosts?.map((userPost) => < DisplayPosts callSinglePost={getProfileUser} post={userPost} key={userPosts.id} />)}
      </>}
    </div>

  )


}
