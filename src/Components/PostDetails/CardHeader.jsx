import React from 'react'
import userIcon from '../../assets/user-profile-icon.jpg'
import { Link } from 'react-router-dom'
export default function CardHeader({ avater, datePost, userName, userId }) {

    return (

        <div className="flex mb-4">
            <img className=" cursor-pointer w-12 h-12 rounded-full object-cover" onError={(e) => e.target.src = userIcon} src={avater} />
            <div className="ml-2 mt-0.5">
                <Link to={`userprofile/${userId}/posts`} className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                    {userName}
                </Link>
                <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                    {datePost}
                </span>
            </div>
        </div>

    )
}
