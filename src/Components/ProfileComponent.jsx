import React, { useContext, useState } from 'react'
import { uploadingPhotoApi } from '../Services/IngenralServices';
import SettingProfile from './SettingProfile';
import { authContext } from '../Contexts/AuthContext';

export default function ProfileComponent({ avatar, userName, dateOfBirth, getProfileUser }) {
    const { userData, setUserData } = useContext(authContext)
    const dateObj = new Date(dateOfBirth);
    const formattedDate = dateObj.toLocaleDateString("en-CA");


    async function handleUploadingImg(e) {
        const file = e.target.files[0];
        const image = URL.createObjectURL(file)
        const formData = new FormData();
        if (file) {
            formData.append("photo", file)
            const res = await uploadingPhotoApi(formData);
            setUserData({
                ...userData,
                photo: image
            });
            await getProfileUser();

        }
    }



    return (
        <div className="max-w-2xl mx-auto dark:bg-[#1E2939] dark:text-white bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src="https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-d-render-of-coding-and-programming-concept-with-code-part-symbol-image_3785570.jpg" alt="Mountain" />
            </div>
            <div className=" group  mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center w-full h-32" src={avatar} alt="" />
                <div className=' group-hover:top-0 transition-all ease-in-out text-cyan-100 w-32 h-32 absolute  top-[100%]  bg-gray-900/70'>
                    <i className=" top-5  left-10 text-4xl absolute fa-solid fa-angles-down " />
                    <label className=' cursor-pointer hover:text-gray-200 text-[15px] absolute top-15  left-1'> <input onChange={handleUploadingImg} type="file" accept="image/*" className="hidden" id="fileInput" />Uploading Image</label>
                </div>

            </div>

            <div className="text-center mt-2">
                <h2 className="font-semibold">{userName}</h2>
                <p className="text-gray-500">{formattedDate}</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <div className='dark:text-white'>2k</div>
                </li>
                <li className="flex flex-col items-center justify-between">
                    <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                    </svg>
                    <div className='dark:text-white'>10k</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <div className='dark:text-white'>15</div>
                </li>
                <SettingProfile />
            </ul>
            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
            </div>
        </div>
    )
}
