import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import Swal from 'sweetalert2';





export default function DropdownComponent({ handleDelete,userId,creatorId ,setIsUpdateingMood}) {
    function doAlert(handleDelete) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-2",
                cancelButton: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete();
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your post has been deleted.",
                    icon: "success"

                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary post is safe :)",
                    icon: "error"
                });
            }
        });
    }


    return (
        <div>
            {userId == creatorId && <Dropdown>
                <DropdownTrigger>
                    <i className=" cursor-pointer rotate-90  w-fit h-fit fa-solid fa-ellipsis" />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem onPress={()=>setIsUpdateingMood(true)} key="edit">Edit</DropdownItem>
                    <DropdownItem onPress={() => doAlert(handleDelete)} key="delete" className="text-danger" color="danger">
                        Delete
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>}

        </div>
    )
}
