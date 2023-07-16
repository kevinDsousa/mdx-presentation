import React from 'react'
import './Button.css'

interface ButtonProps {
    id: number;
    value: string;
    onClick: (id: number) => void;
}

export function Button(props: { id: number, value: string, onClick: any }) {
    const meuHandler = () => props.onClick(props.id)
    return <div className='square' onClick={meuHandler}>{props.value}</div>
}
