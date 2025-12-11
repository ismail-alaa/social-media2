import React from 'react'
import { Link } from 'react-router-dom'
export default function HeadOfFeedPage({avatar,userName,userId}) {
    return (
        <Link to={"profile/" + userId + "/posts"} className='p-3 flex w-fit items-center'>
            <div className=" w-30 h-30 bg-white dark:bg-gray-900    border-4  dark:border-white rounded-full overflow-hidden">
                <img className="object-cover object-center w-full h-30" src={avatar} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-900  px-3'>{userName}</h1>
                <h1 id="role" className='text-lg font-semibold dark:text-gray-300 text-gray-800 px-3'>FrontEnd Developer</h1>
                <p  className='text-sm text-gray-500 hover:text-indigo-500 transition cursor-pointer px-3'> Your Profile...</p>
            </div>
        </Link>
    )
}
