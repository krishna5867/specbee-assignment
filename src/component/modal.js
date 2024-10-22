import React from 'react'
import Cross from "../component/assets/cross.png"

const Modal = ({ onClick, children }) => {
    return (
        <div className='bg-white relative shadow-sm rounded-[10px] mx-6'>
            <button onClick={onClick} className='absolute top-3 right-3 font'>
                <img src={Cross} alt='close_icon' />
            </button>
            {children}
        </div>
    )
}

export default Modal