import { Button } from "../Button/Button"
import { useState } from "react"
import { Plus, X } from 'react-feather'

export const AddCardform = ({handleAddItem}) => {
    const [ formVisible, setFormVisible] = useState(false)
    const [ addBtnVisible, setAddBtnVisible] = useState(true)
    const [label, setLabel] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      handleAddItem(label)
      setLabel('')
    }

    const handleClick = () => {
      setFormVisible(!formVisible)
      setAddBtnVisible(!addBtnVisible)
    }

    return (
      <footer>
        {/* {!addBtnVisible ? null : (
          <a onClick={handleClick} className="p-1 pb-2.5 text-lg text-gray-200 hover:text-gray-50" href="#">
          <Plus className="inline-block pr-1" size={30}/>
          Přidat úkol
        </a>)
        }
        {!formVisible ? null : ( 
          <>
            <X onClick={handleClick} color="white" size={36} className="inline-block text-end"/>
            <form onSubmit={handleSubmit} >
              <textarea
                value={label}
                onChange={(e) => {
                  setLabel(e.target.value)
                }}
                className="w-full p-3 border-t border-l outline-none roundered shadow-inner" rows="3">
              </textarea>
              <div className="mt-1.5">
                <Button>Přidat úkol</Button>
              </div>
            </form>
          </>
         )} */}

         {addBtnVisible 
         ? (
          <a onClick={handleClick} className="p-1 pb-2.5 text-lg text-gray-200 hover:text-gray-50" href="#">
          {/* <span className="inline-block "><Plus size={36}/></span> */}
          <Plus className="inline-block pr-1" size={30}/>
          Přidat úkol
          </a>
         ) : (
          <>
            <div className="flex justify-end">
              <X onClick={handleClick} color="white" size={36} className="inline-block"/>
            </div>
            <form onSubmit={handleSubmit} >
              <textarea
                value={label}
                onChange={(e) => {
                  setLabel(e.target.value)
                }}
                className="w-full p-3 border-t border-l outline-none roundered shadow-inner" rows="3">
              </textarea>
              <div className="mt-1.5">
                <Button>Přidat úkol</Button>
              </div>
            </form>
          </>
         )}
      </footer>
    )
}
