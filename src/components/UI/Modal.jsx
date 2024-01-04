import React from 'react'

const Modal = (props) => {
    const modalHandler = () => {
        props.onCloseModal(false)
    }

    return (
        <div className='w-64 h-40 bg-white z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-2 items-center text-center shadow-gray-900 shadow-2xl'>
            <h1 className='font-comfortaa text-2xl text-teal-700 font-semibold'>{props.message.title}</h1>
            <button onClick={modalHandler} className='text-lg w-12 bg-teal-700 border-2 border-teal-700 hover:bg-white text-center rounded-md text-white hover:text-teal-700 font-comfortaa'>Ok</button>
        </div>
    )
}

export default Modal
