
import { useState } from 'react';
import { addPostApi } from '../Services/PostsServices'
import { Button } from '@heroui/react';

export default function CreatePost({ callAllPosts ,avatar,userName }) {
    const [showForm, setShowForm] = useState(false)
    const [caption, setCaption] = useState("");
    const [imageFile, setImageFile] = useState(null)
    const [imagePreview, setImagePreview] = useState("")
    const [posting, setPosting] = useState(false)
    async function handleCreatePostSubmit(e) {
        e.preventDefault();
        if (caption.trim() == "" && imageFile == null) {
            return;
        }
        const formData = new FormData();
        if (caption) {
            formData.append("body", caption)
        }
        if (imageFile) {
            formData.append("image", imageFile)
        }
        setPosting(true)
        const res = await addPostApi(formData);
        setPosting(false)
        removeImagePreview();
        setCaption("");
        setShowForm(false)
        callAllPosts();


    }
    function handleImageFile(e) {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0])
            setImagePreview(URL.createObjectURL(e.target.files[0]))


        }
    }
    function removeImagePreview() {
        setImagePreview("")
        document.querySelector("#fileInput").value = ""; /this is not the best method to remove input value/

    }

    function handleCancelForm() {
        setShowForm(false)
        setCaption("")
        setImageFile(null);
        setImagePreview("")
    }

    return (

        <div className="max-w-2xl  bg-gray-100 w-full mt-3  mx-auto dark:bg-gray-900 rounded-2xl shadow-md p-6 mb-6">


            {showForm ?
                <form onSubmit={handleCreatePostSubmit} className="dark:bg-gray-800 space-y-4 mt-4">
                    {/* Caption Input */}
                    <div>
                        <textarea
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            autoFocus
                            placeholder="What's on your mind?"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            rows="3"
                        />
                    </div>

                    {/* Image Preview */}
                    {imagePreview && <div className="relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full max-h-64 object-cover rounded-lg"
                        />
                        <button
                            onClick={removeImagePreview}
                            type="button"
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-200"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
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
                                <input onChange={handleImageFile} type="file" accept="image/*" className="hidden" id="fileInput" />
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
                                onClick={handleCancelForm}
                                type="button"
                                className="px-4 py-2 dark:text-gray-400  text-gray-600 dark:hover:text-white transition duration-200 disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <Button

                                isLoading={posting}
                                type="submit"
                                className={`bg-blue-600 text-white px-6 py-2 rounded-md transition duration-200
                                            ${posting ? 'opacity-50 ' : 'hover:bg-blue-700'
                                    }`}
                            >
                                {posting ? 'Posting...' : 'Post'}
                            </Button>

                        </div>
                    </div>
                </form>
                :
                <button onClick={() => setShowForm(true)} className="w-full flex items-center cursor-pointer text-left text-gray-500 dark:bg-gray-800 hover:text-gray-700 bg-gray-100 rounded-lg px-4 py-3 transition duration-200">
                    <div className=" w-7 h-7 bg-white dark:bg-gray-900  dark:border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center w-full h-full"  src={avatar} alt="" />
                    </div> What's on your mind {userName}? Share a post...
                </button>
            }


        </div>




    );
};














