import React from 'react'

const DeleteButton = (props) => {
    const deleteChoiceHandler = () => {
        props.onDeleteChoice(props.choiceTitle)
    }

    return (
        <div>
            <i onClick={deleteChoiceHandler} className="fa-regular fa-trash-can text-teal-500 cursor-pointer"></i>
        </div>
    )
}

export default DeleteButton
