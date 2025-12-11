import { Button, Input } from '@heroui/react'
import React from 'react'

export default function UpdatingComment({isUpdateing,newContentComment,setIsUpdateingMood,handleUpdatingComment,setNewContentComment}) {
    return (
        <div className=' pl-11 pt-2 px-2 flex flex-col'>
            <Input isDisabled={isUpdateing} value={newContentComment} onChange={(e) => setNewContentComment(e.target.value)} variant='bordered' />
            <div className='ms-auto mt-3'>
                <Button onPress={() => setIsUpdateingMood(false)} color='dafault'>Cancel</Button>
                <Button isDisabled={newContentComment.trim().length < 2} isLoading={isUpdateing} onPress={handleUpdatingComment} color='primary'>Update</Button>
            </div>
        </div>
    )
}

