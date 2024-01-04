import { useState } from "react"
import Navbar from "./components/UI/Navbar"
import ChoiceList from "./components/choices/ChoiceList"
import InputChoice from "./components/form/InputChoice"
import ChooseButton from "./components/choose/ChooseButton"
import Modal from "./components/UI/Modal"
import EmptyChoice from "./components/UI/EmptyChoice"
import Footer from "./components/UI/Footer"

function App() {
  const [choiceList, setChoiceList] = useState([])
  const [choiceToDisplay, setChoiceToDisplay] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [validChoice, setValidChoice] = useState(true)

  const addChoice = (choice) => {
    if (choice.trim().length === 0 || choice === undefined) {
      setValidChoice(false)
    }
    else {
      const newChoice = {
        id: (Math.random()).toString(),
        title: choice
      }
      setChoiceList((prevChoiceList) => {
        return [...prevChoiceList, newChoice]
      })
    }
  }

  const deleteChoice = (newChoiceList) => {
    setChoiceList(newChoiceList)
  }

  const deleteAllChoices = () => {
    setChoiceList([])
  }

  const getSelectedChoice = (selectedChoice) => {
    // console.log(selectedChoice)
    setChoiceToDisplay(selectedChoice)
    setShowModal(true)
  }


  const showModalHandler = (value) => {
    setShowModal(value)
    setValidChoice(true)
  }

  return (
    <>
      <Navbar />
      <InputChoice onAddNewChoice={addChoice} />
      {choiceList.length > 0 && <ChoiceList choices={choiceList} onDeleteChoice={deleteChoice} onDeleteAll={deleteAllChoices} />}
      {choiceList.length > 1 && <ChooseButton choices={choiceList} onChoose={getSelectedChoice} />}
      {choiceList.length === 0 && <EmptyChoice />}
      {showModal && <Modal message={choiceToDisplay} onCloseModal={showModalHandler} />}
      {!validChoice && <Modal message={{ title: 'Please enter a valid choice!' }} onCloseModal={showModalHandler} />}
      <Footer />
    </>
  )
}

export default App
