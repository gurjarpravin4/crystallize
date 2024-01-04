import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [choice, setChoice] = useState('')

    const choiceHandler = (event) => {
        const userEnteredChoice = event.target.value
        setChoice(userEnteredChoice)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onChoiceEntered(choice.trim())
        setChoice('')
    }
    return (
        <form onSubmit={submitHandler} autoComplete='off' className='flex max-sm:flex-col items-evenly justify-between gap-6 font-comfortaa font-semibold text-teal-600'>
            <div className='flex items-center gap-2'>
                <label className='w-52'>Enter a choice: </label>
                <input type='text' name='choice' value={choice} onChange={choiceHandler} className='border-b-2 border-b-teal-100 focus:border-b-teal-700 w-full focus:outline-none' />
            </div>
            <button type='submit' className='rounded-lg text-center hover:text-teal-700 hover:bg-white text-white border-teal-700 border-2 bg-teal-700 p-2'>Add Choice</button>
        </form>
    )
}

export default Form
