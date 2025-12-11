import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardAction({ numberOfComments, postId }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center mt-5">
            <div className="flex">
                <span className=" text-gray-500 dark:text-gray-400 font-light cursor-pointer"><i className=" mx-2 fa-solid fa-heart" />120</span>
                <button onClick={() => navigate("/post-detailes/" + postId)} className="ml-1 text-gray-500 dark:text-gray-400 font-light cursor-pointer"><i className="mx-2 fa-solid fa-comment" />{numberOfComments}</button>
                <div className="ml-1 text-gray-500 dark:text-gray-400 font-light cursor-pointer"><i className="mx-2 fa-solid fa-share" />22</div>
            </div>
            <div className="ms-auto text-gray-500 dark:text-gray-400 font-light cursor-pointer"><i className="fa-solid fa-bookmark" /></div>
        </div>
    )
}
