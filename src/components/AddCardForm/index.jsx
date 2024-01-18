import { Button } from "../Button"
import { useState } from "react"

export const AddCardform = () => {
    const [ formVisible, setFormVisible] = useState(false)

    return (
        <footer>
        <a onClick={} className="p-1 pb-2.5 text-gray-200 hover:text-gray-50" href="#">
          <span className="pl-1">+ Přidat kartičku</span>
        </a>
        <form className="hidden" action="">
          <textarea className="w-full p-3 border-t border-l outline-none roundered shadow-inner" rows="3"></textarea>
          <div className="mt-1.5">
            <Button>Add card</Button>
          </div>
        </form>
      </footer>
    )
}