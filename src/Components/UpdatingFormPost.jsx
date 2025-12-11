import React, { useState } from 'react'
import { Button } from '@heroui/react'
import { updatePostApi } from '../Services/PostsServices';




export default function UpdatingFormPost({ setIsUpdateingMood, photo, caption, postId, callAllPosts, callSinglePost, commentLimit }) {

    const [newCaptionPost, setNewCaptionPost] = useState(caption);
    const [newPhotoPost, setNewPhotoPost] = useState(null);
    const [newPreviewPhoto, setNewPreviewPhoto] = useState(photo);
    const [isUpdating, setIsUpdating] = useState(false);

    async function handleUpdatingForm(e) {
        e.preventDefault();
        const formData = new FormData();
        if (newCaptionPost !== caption) {
            formData.append("body", newCaptionPost)
        }

        if (newPhotoPost) {
            formData.append("image", newPhotoPost)
        }
        
        setIsUpdating(true)
        const { message } = await updatePostApi(postId, formData);

        if (message == "success") {
            if (commentLimit) {
                await callAllPosts();
            } else {
                await callSinglePost();
            }
        }
        setIsUpdating(false)
        setIsUpdateingMood(false)


    }
    function handlePhoto(e) {
        setNewPhotoPost(e.target.files[0])
        setNewPreviewPhoto(URL.createObjectURL(e.target.files[0]))
    }
  





    return (
        <form onSubmit={handleUpdatingForm} className="dark:bg-gray-800 space-y-4 mt-4">
            {/* Caption Input */}
            <div>
                <textarea
                    value={newCaptionPost}
                    onChange={(e) => setNewCaptionPost(e.target.value)}
                    autoFocus
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                />
            </div>

            {/* Image Preview */}
            {true && <div className="relative">
                <img
                    src={newPreviewPhoto}
                    alt="Preview"
                    className="w-full max-h-64 object-cover rounded-lg"
                />
            </div>}

            {/* Error Message */}
            {false && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm">
                Error
            </div>
            }
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    {/* Image Upload Button */}
                    <label className="dark:text-white cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200">
                        <input onChange={handlePhoto} type="file" accept="image/*" className="hidden" id="fileInput" />
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-sm font-medium">Photo</span>
                        </div>
                    </label>
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setIsUpdateingMood(false)}
                        type="button"
                        className="px-4 py-2 dark:text-gray-400  text-gray-600 dark:hover:text-white transition duration-200 disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <Button
                        isLoading={isUpdating}
                        type="submit"
                        className={`bg-blue-600 text-white px-6 py-2 rounded-md transition duration-200
                            ${isUpdating ? 'opacity-50 ' : 'hover:bg-blue-700'
                            }`}
                    >
                        {isUpdating ? 'Updating...' : 'Update'}
                    </Button>

                </div>
            </div>
        </form>
    )
}
