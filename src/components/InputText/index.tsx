import React, { useState } from 'react'
import './styles.css'

import { RiUserFill } from 'react-icons/ri'
import { HiLockClosed } from 'react-icons/hi'

interface InputTextProps {
    type: "email" | "password"
    name: string
    placeHolder: string
    className?: string
    onChange: Function
    value: any
}

export function InputText({ type, name, placeHolder, className, onChange, value }: InputTextProps) {
    function handleFocus() {
        const container = document.getElementById(name) as HTMLDivElement
        container.classList.add('focus-input')
        const span = document.getElementById(`input-icon-${name}`) as HTMLDivElement
        span.style.color = '#2494f4'
    }

    function handleBlur() {
        const container = document.getElementById(name) as HTMLDivElement
        container.classList.remove('focus-input')
        const span = document.getElementById(`input-icon-${name}`) as HTMLDivElement
        span.style.removeProperty("color")
    };

    return (
        <div id={name} className={`input-text flex items-center bg-white-500 ${className}`}>
            <span>
                {type === "email" ? <RiUserFill id={`input-icon-${name}`} className='text-gray-200' />
                    : type === "password" ? <HiLockClosed id={`input-icon-${name}`} className='text-gray-200' /> : null}
            </span>
            <input type={type} placeholder={placeHolder} onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}
