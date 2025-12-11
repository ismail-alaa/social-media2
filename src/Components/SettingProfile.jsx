import React from 'react'

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function SettingProfile() {
    const navigate = useNavigate();
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <div className='flex flex-col items-center'>
                        <i className=" cursor-pointer w-4 fill-current text-blue-900  h-fit fa-solid fa-gear" />
                        <p className='cursor-pointer'>Setting</p>
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem onPress={() => navigate("/profile/changepassword")} key="delete" className="text-danger" color="danger">
                        Change Password
                    </DropdownItem>
                </DropdownMenu>
                <DropdownTrigger />
            </Dropdown>
        </div>
    )
}
