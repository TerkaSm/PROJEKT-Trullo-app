import { useState } from "react"

export const AddListForm = ({handleAddList}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddList(inputValue)
    setInputValue('')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex-shrink-0 sm:w-80 sm:mx-4 sm:mb-0 sm:pr-8 text-gray-600">
      <input 
        type='text'
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value)
        }}
        className="w-full p-2.5 bg-white bg-opacity-50 focus:bg-opacity-100 placeholder-white focus:placeholder-gray-600 font-bold rounded-lg focus:shadow-xl outline-none" 
        placeholder="+ Přidat nový seznam" 
        id="" />
    </form>
  )
}
