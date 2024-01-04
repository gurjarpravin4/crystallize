import React from 'react'
import Choice from './Choice'
import Card from '../UI/Card'

const ChoiceList = (props) => {

    const deleteChoiceHandler = (deletedChoice) => {
        const newChoiceList = props.choices.filter((choice) => choice.title !== deletedChoice)
        props.onDeleteChoice(newChoiceList)
    }

    const deleteAllHandler = () => {
        props.onDeleteAll()
    }

    return (
        <Card className='m-auto max-sm:mx-2 max-w-[40rem] flex flex-col text-center px-2 my-2 py-10 border border-teal-400 bg-teal-50 rounded-lg'>
            <button onClick={deleteAllHandler} className='font-comfortaa text-teal-600 underline w-20 mb-2'>Delete All</button>
            <ul className='flex flex-col gap-4 items-center justify-between'>
                {
                    props.choices.map((choice) => <Choice key={choice.id} title={choice.title} onDelete={deleteChoiceHandler} />)
                }
            </ul>
        </Card>
    )
}

export default ChoiceList
