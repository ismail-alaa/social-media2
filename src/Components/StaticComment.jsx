import React from 'react'

export default function StaticComment({CommentContent}) {
    return (
        <div className='flex flex-col py-2'>
            <p className='pl-14 font-bold'>{CommentContent}</p>
            <div className='ms-15 flex gap-3 text-gray-600 dark:text-gray-400'>
                <p>2d</p>
                <p className='cursor-pointer'><i className=" fa-solid fa-heart" />Love</p>
                <p className='cursor-pointer'><i className="fa-solid fa-reply" />Reply</p>
            </div>
        </div>
    )
}
