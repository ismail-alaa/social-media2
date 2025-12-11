import { Button, Input } from '@heroui/react'
import React from 'react'
import { useState } from 'react';

export default function SingleComment({isLoading,handleCommentSubmit,commentContent,setCommentContent}) {
  
    return (
        <div className="relative w-full">
            <Input value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                classNames={{
                    inputWrapper:
                        " bg-gray-300 dark:bg-[#3F3F46] border border-transparent focus-within:border-blue-500  px-4 shadow-sm transition-all",
                    input:
                        "text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                }}
                labelPlacement="inside"
                placeholder="Comment..."


            />
            <Button isLoading={isLoading}
                onPress={handleCommentSubmit}
                type="submit"
                variant="solid"
                color="primary"
                className="absolute top-1/2 -translate-y-1/2 right-0  px-4 py-1 text-sm"
            >
                Comment
            </Button>
        </div>
    )
}
