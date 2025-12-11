import React from 'react'

export default function CardBody({caption,photo }) {
    return (
        <div className="w-full">
            {caption && <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal mb-2">{caption}</p>}

            {photo && (
                <div className="w-full overflow-hidden rounded-lg">
                    <img className="w-full max-h-[300px] object-cover" src={photo} alt="post" />
                </div>
            )}
        </div>
    )
}
