import React from 'react'
import Card from '../UI/Card'
import Form from './Form'

const InputChoice = (props) => {
    
    const getChoice = (choice) => {
        props.onAddNewChoice(choice)
    }

    return (
        <Card className='max-w-[40rem] border border-teal-400 rounded-lg max-sm:mx-2 mx-auto mt-8 mb-4 p-4'>
            <Form onChoiceEntered={getChoice} />
        </Card>
    )
}

export default InputChoice
