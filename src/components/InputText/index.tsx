import React from 'react'
import './styles.css'

import { RiUserFill } from 'react-icons/ri'
import { HiLockClosed } from 'react-icons/hi'

interface InputTextProps {
    type: "email" | "password"
    placeHolder: string
    className: string
}

export function InputText({ type, placeHolder, className }: InputTextProps) {
    return (
        <div className={`input-text flex items-center bg-white-500 ${className}`}>
            <span className="input-icon">
                {type === "email" ? <RiUserFill className='text-gray-200' />
                    : type === "password" ? <HiLockClosed className='text-gray-200' /> : null}
            </span>
            <input type={type} placeholder={placeHolder} name="name" />
        </div>
    )
}
