import React, { useState } from 'react'
import CardHeader from './PostDetails/CardHeader'
import DropdownComponent from './DropdownComponent'
import { deleteCommentApi, updateCommentApi } from '../Services/CommentServices'
import UpdatingComment from './UpdatingComment';
import StaticComment from './StaticComment';

export default function Comments({ comment, userId, callAllPosts, commentLimit, callSinglePost }) {
    const [isUpdateingMood, setIsUpdateingMood] = useState(false);
    const [newContentComment, setNewContentComment] = useState(comment.content);
    const [isUpdateing, setIsUpdateing] = useState(false)





    async function handleUpdatingComment() {
        const res = await updateCommentApi(comment._id, newContentComment)
        setIsUpdateing(true)
        if (commentLimit) {
            await callAllPosts();


        } else {
            await callSinglePost();

        }
        setIsUpdateing(false)
        setIsUpdateingMood(false)




    }
    async function handleDeleteComment() {
        const res = await deleteCommentApi(comment._id)
        console.log(res)
        if (commentLimit) {
            await callAllPosts();


        } else {
            await callSinglePost();

        }
    }



    return (
        <div className='pt-2 px-2'>

            <div className='flex justify-between'>
                <CardHeader avater={comment.commentCreator.photo} userName={comment.commentCreator.name} datePost={comment.createdAt} />
                <DropdownComponent handleDelete={handleDeleteComment} setIsUpdateingMood={setIsUpdateingMood} userId={userId} creatorId={comment.commentCreator._id} />
            </div>
            {isUpdateingMood ?
                <UpdatingComment setNewContentComment={setNewContentComment} handleUpdatingComment={handleUpdatingComment} isUpdateing={isUpdateing} newContentComment={newContentComment} setIsUpdateingMood={setIsUpdateingMood} />
                :
                <StaticComment CommentContent={comment.content} />
            }
        </div>
    )
}

















