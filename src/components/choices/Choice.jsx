import React from 'react'
import DeleteButton from './DeleteButton'

const Choice = (props) => {

    const deleteChoiceHandler = (deletedChoice) => {
        props.onDelete(deletedChoice)
    }

    return (
        <li className='font-comfortaa font-semibold w-full p-4 flex justify-between items-center border border-teal-300 shadow-md rounded-md bg-white'>
            <span className='cursor-pointer text-teal-700'>{props.title}</span>
            <DeleteButton choiceTitle={props.title} onDeleteChoice={deleteChoiceHandler} />
            
        </li>
    )
}

export default Choice
