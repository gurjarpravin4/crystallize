import React from 'react'
import Card from '../UI/Card'

const ChooseButton = (props) => {

    const makeChoiceHandler = () => {
        const choices = props.choices
        const i = Math.floor(Math.random() * choices.length)
        const selectedChoice = choices[i]
        props.onChoose(selectedChoice)
    }

    return (
        <Card className='w-24 mx-auto my-4'>
            <button onClick={makeChoiceHandler} className='bg-teal-700 text-white hover:text-teal-700 hover:bg-white font-semibold font-comfortaa border-2 border-teal-700 p-2 w-full rounded-lg text-center'>Choose!</button>
        </Card>
    )
}

export default ChooseButton
