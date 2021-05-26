import { useEffect, useState } from 'react'
import Style from './style.module.scss'

export default function Popup({ title, message, type, show }) {

    return (
        <div
            className={`${Style.container} ${type === 'erro' ? Style.erro : ''}`}
            style={{ display: show ? 'flex' : 'none'}}
        >
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
}