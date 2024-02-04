import { Button } from "../Button"
import { useState } from "react"

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
        {!addBtnVisible ? (
          <a onClick={handleClick} className="p-1 pb-2.5 text-gray-200 hover:text-gray-50" href="#">
          <span className="pl-1">+ Přidat úkol</span>
        </a>) : null
        }
        {!formVisible ? null : ( 
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
         )}
      </footer>
    )
}
