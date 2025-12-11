import React, { useContext, useState } from 'react'


import Comments from './Comments'
import CardHeader from './PostDetails/CardHeader'
import CardBody from './PostDetails/CardBody'
import CardAction from './PostDetails/CardAction'
import { Button } from '@heroui/react'
import { addComment } from '../Services/CommentServices'
import SingleComment from './SingleComment'

import { authContext } from '../Contexts/AuthContext'
import { deletePostApi } from '../Services/PostsServices'
import DropdownComponent from './DropdownComponent'
import heroui from './../hero';
import UpdatingFormPost from './UpdatingFormPost'
export default function DisplayPosts({ post, commentLimit, callAllPosts, callSinglePost }) {


    const { userData } = useContext(authContext);
    const [secondLimit, setSecondLimit] = useState(2);
    const [isLoading, setIsLoading] = useState(false);
    const [isMoreCommentLoading, setIsMoreCommentLoading] = useState(false);
    const [commentContent, setCommentContent] = useState("");
    const [isupdateingMood,setIsUpdateingMood]=useState(false)




    async function handleCommentSubmit() {
        setIsLoading(true)
        const { message } = await addComment(commentContent, post._id);

        if (message == "success") {
            setIsLoading(false)
            setCommentContent("")
            if (commentLimit) {
                callAllPosts();
            } else {
                callSinglePost();
            }
        } else {
            setIsLoading(false)
        }
    }
    function handleSecondLimit() {
        setIsMoreCommentLoading(true)
        setTimeout(() => {
            setSecondLimit(secondLimit + 2)
            setIsLoading(false)
        }, 500);
    }
    async function handleDeletePost() {
        const res = await deletePostApi(post._id)

        if (commentLimit) {
            await callAllPosts();
        } else {
            await callSinglePost();
        }

    }
    return (
        <>
            {
                <div className='bg-gray-100 w-full pt-3 mx-auto dark:bg-gray-900 shadow rounded-lg max-w-2xl'>
                    <div className="bg-white px-3 w-full py-3 mx-auto dark:bg-gray-800 shadow rounded-lg max-w-2xl">
                        <div className='flex justify-between'>
                            <CardHeader userId={post.user._id} avater={post.user.photo} userName={post.user.name} datePost={post.createdAt} />
                            <DropdownComponent setIsUpdateingMood={setIsUpdateingMood} handleDelete={handleDeletePost} userId={post.user._id} creatorId={userData._id} />
                        </div>
                        {isupdateingMood ?
                            <UpdatingFormPost  commentLimit={commentLimit} callAllPosts={callAllPosts} callSinglePost={callSinglePost}  setIsUpdateingMood={setIsUpdateingMood} postId={post._id} caption={post.body} photo={post.image}/>
                            :
                            <CardBody caption={post.body} photo={post.image} />
                        }

                        <CardAction numberOfComments={post.comments.length} postId={post._id} />
                    </div>

                    <SingleComment commentContent={commentContent} setCommentContent={setCommentContent} isLoading={isLoading} handleCommentSubmit={handleCommentSubmit} />

                    {post.comments.slice(0, commentLimit ?? secondLimit).map((comment) => <Comments callSinglePost={callSinglePost} commentLimit={commentLimit} userId={post.user._id} callAllPosts={callAllPosts} key={comment._id} comment={comment} />)}
                    {post.comments.length > secondLimit && !commentLimit && <Button isLoading={isMoreCommentLoading} onPress={handleSecondLimit} className='w-full mt-4' >More Comments </Button>}

                </div>
            }
        </>
    )
}






